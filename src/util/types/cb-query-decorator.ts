import { PrismaClient } from '@prisma/client';

/**
 * Type to inform witch key from request should be sent for query. Should return true if element already exist, false otherwise
 */
type CbQueryDecorator = (
  /**
   * Value received from client request
   */
  value: any,
  /**
   * Prisma instance to query
   */
  prismaClient: PrismaClient,
) => Promise<boolean>;

export default CbQueryDecorator;
