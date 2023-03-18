import { ConflictException } from "@nestjs/common";
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import PrismaProvider from "../../../prisma/prisma-provider";
import CbQueryDecorator from "../types/cb-query-decorator";

/**
 * Validate if the entity has an element with the given id.
 * @param checkUniqueQueryCb Callback returning true if already exists, false otherwise
 * @param validationOptions Read more {@link ValidationOptions}
 * @return Must return true if the entity already exists, false otherwise
 */
export function CheckUnique(
  checkUniqueQueryCb: CbQueryDecorator,
  validationOptions?: ValidationOptions
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [checkUniqueQueryCb],
      validator: CheckUniqueConstraint,
    });
  };
}

@ValidatorConstraint({ name: "CheckUnique" })
export class CheckUniqueConstraint implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    const [cb] = args.constraints as [CbQueryDecorator];
    const key = args.property;

    const exist = await cb(value, PrismaProvider.getConnection());

    if (exist) throw new ConflictException(`${key} already exists`);

    return true;
  }
}