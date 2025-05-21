
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model Daily
 * 
 */
export type Daily = $Result.DefaultSelection<Prisma.$DailyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Activity: {
  Basal: 'Basal',
  Sedentario: 'Sedentario',
  Leve: 'Leve',
  Moderado: 'Moderado',
  Ativo: 'Ativo',
  Muito_Ativo: 'Muito_Ativo',
  Extremamente_Ativo: 'Extremamente_Ativo'
};

export type Activity = (typeof Activity)[keyof typeof Activity]

}

export type Activity = $Enums.Activity

export const Activity: typeof $Enums.Activity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.daily`: Exposes CRUD operations for the **Daily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dailies
    * const dailies = await prisma.daily.findMany()
    * ```
    */
  get daily(): Prisma.DailyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Item: 'Item',
    Meal: 'Meal',
    Daily: 'Daily'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "item" | "meal" | "daily"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      Daily: {
        payload: Prisma.$DailyPayload<ExtArgs>
        fields: Prisma.DailyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>
          }
          findFirst: {
            args: Prisma.DailyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>
          }
          findMany: {
            args: Prisma.DailyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>[]
          }
          create: {
            args: Prisma.DailyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>
          }
          createMany: {
            args: Prisma.DailyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>[]
          }
          delete: {
            args: Prisma.DailyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>
          }
          update: {
            args: Prisma.DailyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>
          }
          deleteMany: {
            args: Prisma.DailyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>[]
          }
          upsert: {
            args: Prisma.DailyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPayload>
          }
          aggregate: {
            args: Prisma.DailyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDaily>
          }
          groupBy: {
            args: Prisma.DailyGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyCountArgs<ExtArgs>
            result: $Utils.Optional<DailyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    item?: ItemOmit
    meal?: MealOmit
    daily?: DailyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    daily: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily?: boolean | UserCountOutputTypeCountDailyArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyWhereInput
  }


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    alimentos: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alimentos?: boolean | MealCountOutputTypeCountAlimentosArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountAlimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type DailyCountOutputType
   */

  export type DailyCountOutputType = {
    meal: number
  }

  export type DailyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | DailyCountOutputTypeCountMealArgs
  }

  // Custom InputTypes
  /**
   * DailyCountOutputType without action
   */
  export type DailyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCountOutputType
     */
    select?: DailyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyCountOutputType without action
   */
  export type DailyCountOutputTypeCountMealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    idade: number | null
    peso_init: number | null
    peso_now: number | null
    altura: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    idade: number | null
    peso_init: number | null
    peso_now: number | null
    altura: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nome: string | null
    sobrenome: string | null
    idade: number | null
    peso_init: number | null
    peso_now: number | null
    altura: number | null
    atividade: $Enums.Activity | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nome: string | null
    sobrenome: string | null
    idade: number | null
    peso_init: number | null
    peso_now: number | null
    altura: number | null
    atividade: $Enums.Activity | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nome: number
    sobrenome: number
    idade: number
    peso_init: number
    peso_now: number
    altura: number
    atividade: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    idade?: true
    peso_init?: true
    peso_now?: true
    altura?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    idade?: true
    peso_init?: true
    peso_now?: true
    altura?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nome?: true
    sobrenome?: true
    idade?: true
    peso_init?: true
    peso_now?: true
    altura?: true
    atividade?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nome?: true
    sobrenome?: true
    idade?: true
    peso_init?: true
    peso_now?: true
    altura?: true
    atividade?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nome?: true
    sobrenome?: true
    idade?: true
    peso_init?: true
    peso_now?: true
    altura?: true
    atividade?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    nome: string
    sobrenome: string
    idade: number
    peso_init: number
    peso_now: number
    altura: number
    atividade: $Enums.Activity
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    peso_init?: boolean
    peso_now?: boolean
    altura?: boolean
    atividade?: boolean
    created_at?: boolean
    updated_at?: boolean
    daily?: boolean | User$dailyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    peso_init?: boolean
    peso_now?: boolean
    altura?: boolean
    atividade?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    peso_init?: boolean
    peso_now?: boolean
    altura?: boolean
    atividade?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nome?: boolean
    sobrenome?: boolean
    idade?: boolean
    peso_init?: boolean
    peso_now?: boolean
    altura?: boolean
    atividade?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nome" | "sobrenome" | "idade" | "peso_init" | "peso_now" | "altura" | "atividade" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily?: boolean | User$dailyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      daily: Prisma.$DailyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nome: string
      sobrenome: string
      idade: number
      peso_init: number
      peso_now: number
      altura: number
      atividade: $Enums.Activity
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    daily<T extends User$dailyArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly sobrenome: FieldRef<"User", 'String'>
    readonly idade: FieldRef<"User", 'Int'>
    readonly peso_init: FieldRef<"User", 'Float'>
    readonly peso_now: FieldRef<"User", 'Float'>
    readonly altura: FieldRef<"User", 'Float'>
    readonly atividade: FieldRef<"User", 'Activity'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.daily
   */
  export type User$dailyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    where?: DailyWhereInput
    orderBy?: DailyOrderByWithRelationInput | DailyOrderByWithRelationInput[]
    cursor?: DailyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyScalarFieldEnum | DailyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    mealId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    mealId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    alimento: string | null
    porcao: string | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    mealId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    alimento: string | null
    porcao: string | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    mealId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    alimento: number
    porcao: number
    calorias_kcal: number
    carboidratos_g: number
    proteinas_g: number
    gorduras_g: number
    fibras_g: number
    sodio_mg: number
    mealId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    mealId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    mealId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    alimento?: true
    porcao?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    mealId?: true
    created_at?: true
    updated_at?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    alimento?: true
    porcao?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    mealId?: true
    created_at?: true
    updated_at?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    alimento?: true
    porcao?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    mealId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    alimento: string | null
    porcao: string | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    mealId: number
    created_at: Date
    updated_at: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alimento?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    mealId?: boolean
    created_at?: boolean
    updated_at?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alimento?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    mealId?: boolean
    created_at?: boolean
    updated_at?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alimento?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    mealId?: boolean
    created_at?: boolean
    updated_at?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    alimento?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    mealId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alimento" | "porcao" | "calorias_kcal" | "carboidratos_g" | "proteinas_g" | "gorduras_g" | "fibras_g" | "sodio_mg" | "mealId" | "created_at" | "updated_at", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alimento: string | null
      porcao: string | null
      calorias_kcal: number | null
      carboidratos_g: number | null
      proteinas_g: number | null
      gorduras_g: number | null
      fibras_g: number | null
      sodio_mg: number | null
      mealId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly alimento: FieldRef<"Item", 'String'>
    readonly porcao: FieldRef<"Item", 'String'>
    readonly calorias_kcal: FieldRef<"Item", 'Float'>
    readonly carboidratos_g: FieldRef<"Item", 'Float'>
    readonly proteinas_g: FieldRef<"Item", 'Float'>
    readonly gorduras_g: FieldRef<"Item", 'Float'>
    readonly fibras_g: FieldRef<"Item", 'Float'>
    readonly sodio_mg: FieldRef<"Item", 'Float'>
    readonly mealId: FieldRef<"Item", 'Int'>
    readonly created_at: FieldRef<"Item", 'DateTime'>
    readonly updated_at: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    dailyId: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    dailyId: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    porcao: string | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    dailyId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    porcao: string | null
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    dailyId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    porcao: number
    calorias_kcal: number
    carboidratos_g: number
    proteinas_g: number
    gorduras_g: number
    fibras_g: number
    sodio_mg: number
    dailyId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    dailyId?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    dailyId?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    porcao?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    dailyId?: true
    created_at?: true
    updated_at?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    porcao?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    dailyId?: true
    created_at?: true
    updated_at?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    porcao?: true
    calorias_kcal?: true
    carboidratos_g?: true
    proteinas_g?: true
    gorduras_g?: true
    fibras_g?: true
    sodio_mg?: true
    dailyId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    porcao: string
    calorias_kcal: number | null
    carboidratos_g: number | null
    proteinas_g: number | null
    gorduras_g: number | null
    fibras_g: number | null
    sodio_mg: number | null
    dailyId: number
    created_at: Date
    updated_at: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    dailyId?: boolean
    created_at?: boolean
    updated_at?: boolean
    alimentos?: boolean | Meal$alimentosArgs<ExtArgs>
    daily?: boolean | DailyDefaultArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    dailyId?: boolean
    created_at?: boolean
    updated_at?: boolean
    daily?: boolean | DailyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    dailyId?: boolean
    created_at?: boolean
    updated_at?: boolean
    daily?: boolean | DailyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    porcao?: boolean
    calorias_kcal?: boolean
    carboidratos_g?: boolean
    proteinas_g?: boolean
    gorduras_g?: boolean
    fibras_g?: boolean
    sodio_mg?: boolean
    dailyId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "porcao" | "calorias_kcal" | "carboidratos_g" | "proteinas_g" | "gorduras_g" | "fibras_g" | "sodio_mg" | "dailyId" | "created_at" | "updated_at", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alimentos?: boolean | Meal$alimentosArgs<ExtArgs>
    daily?: boolean | DailyDefaultArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily?: boolean | DailyDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    daily?: boolean | DailyDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      alimentos: Prisma.$ItemPayload<ExtArgs>[]
      daily: Prisma.$DailyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      porcao: string
      calorias_kcal: number | null
      carboidratos_g: number | null
      proteinas_g: number | null
      gorduras_g: number | null
      fibras_g: number | null
      sodio_mg: number | null
      dailyId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alimentos<T extends Meal$alimentosArgs<ExtArgs> = {}>(args?: Subset<T, Meal$alimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daily<T extends DailyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyDefaultArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly porcao: FieldRef<"Meal", 'String'>
    readonly calorias_kcal: FieldRef<"Meal", 'Float'>
    readonly carboidratos_g: FieldRef<"Meal", 'Float'>
    readonly proteinas_g: FieldRef<"Meal", 'Float'>
    readonly gorduras_g: FieldRef<"Meal", 'Float'>
    readonly fibras_g: FieldRef<"Meal", 'Float'>
    readonly sodio_mg: FieldRef<"Meal", 'Float'>
    readonly dailyId: FieldRef<"Meal", 'Int'>
    readonly created_at: FieldRef<"Meal", 'DateTime'>
    readonly updated_at: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.alimentos
   */
  export type Meal$alimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model Daily
   */

  export type AggregateDaily = {
    _count: DailyCountAggregateOutputType | null
    _avg: DailyAvgAggregateOutputType | null
    _sum: DailySumAggregateOutputType | null
    _min: DailyMinAggregateOutputType | null
    _max: DailyMaxAggregateOutputType | null
  }

  export type DailyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyMinAggregateOutputType = {
    id: number | null
    data: string | null
    userId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DailyMaxAggregateOutputType = {
    id: number | null
    data: string | null
    userId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DailyCountAggregateOutputType = {
    id: number
    data: number
    userId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DailyAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyMinAggregateInputType = {
    id?: true
    data?: true
    userId?: true
    created_at?: true
    updated_at?: true
  }

  export type DailyMaxAggregateInputType = {
    id?: true
    data?: true
    userId?: true
    created_at?: true
    updated_at?: true
  }

  export type DailyCountAggregateInputType = {
    id?: true
    data?: true
    userId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DailyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Daily to aggregate.
     */
    where?: DailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dailies to fetch.
     */
    orderBy?: DailyOrderByWithRelationInput | DailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dailies
    **/
    _count?: true | DailyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyMaxAggregateInputType
  }

  export type GetDailyAggregateType<T extends DailyAggregateArgs> = {
        [P in keyof T & keyof AggregateDaily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaily[P]>
      : GetScalarType<T[P], AggregateDaily[P]>
  }




  export type DailyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyWhereInput
    orderBy?: DailyOrderByWithAggregationInput | DailyOrderByWithAggregationInput[]
    by: DailyScalarFieldEnum[] | DailyScalarFieldEnum
    having?: DailyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyCountAggregateInputType | true
    _avg?: DailyAvgAggregateInputType
    _sum?: DailySumAggregateInputType
    _min?: DailyMinAggregateInputType
    _max?: DailyMaxAggregateInputType
  }

  export type DailyGroupByOutputType = {
    id: number
    data: string
    userId: number
    created_at: Date
    updated_at: Date
    _count: DailyCountAggregateOutputType | null
    _avg: DailyAvgAggregateOutputType | null
    _sum: DailySumAggregateOutputType | null
    _min: DailyMinAggregateOutputType | null
    _max: DailyMaxAggregateOutputType | null
  }

  type GetDailyGroupByPayload<T extends DailyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyGroupByOutputType[P]>
            : GetScalarType<T[P], DailyGroupByOutputType[P]>
        }
      >
    >


  export type DailySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    meal?: boolean | Daily$mealArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DailyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily"]>

  export type DailySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily"]>

  export type DailySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily"]>

  export type DailySelectScalar = {
    id?: boolean
    data?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DailyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "userId" | "created_at" | "updated_at", ExtArgs["result"]["daily"]>
  export type DailyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | Daily$mealArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DailyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Daily"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: string
      userId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["daily"]>
    composites: {}
  }

  type DailyGetPayload<S extends boolean | null | undefined | DailyDefaultArgs> = $Result.GetResult<Prisma.$DailyPayload, S>

  type DailyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyCountAggregateInputType | true
    }

  export interface DailyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Daily'], meta: { name: 'Daily' } }
    /**
     * Find zero or one Daily that matches the filter.
     * @param {DailyFindUniqueArgs} args - Arguments to find a Daily
     * @example
     * // Get one Daily
     * const daily = await prisma.daily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyFindUniqueArgs>(args: SelectSubset<T, DailyFindUniqueArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Daily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyFindUniqueOrThrowArgs} args - Arguments to find a Daily
     * @example
     * // Get one Daily
     * const daily = await prisma.daily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFindFirstArgs} args - Arguments to find a Daily
     * @example
     * // Get one Daily
     * const daily = await prisma.daily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyFindFirstArgs>(args?: SelectSubset<T, DailyFindFirstArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFindFirstOrThrowArgs} args - Arguments to find a Daily
     * @example
     * // Get one Daily
     * const daily = await prisma.daily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dailies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dailies
     * const dailies = await prisma.daily.findMany()
     * 
     * // Get first 10 Dailies
     * const dailies = await prisma.daily.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyWithIdOnly = await prisma.daily.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyFindManyArgs>(args?: SelectSubset<T, DailyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Daily.
     * @param {DailyCreateArgs} args - Arguments to create a Daily.
     * @example
     * // Create one Daily
     * const Daily = await prisma.daily.create({
     *   data: {
     *     // ... data to create a Daily
     *   }
     * })
     * 
     */
    create<T extends DailyCreateArgs>(args: SelectSubset<T, DailyCreateArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dailies.
     * @param {DailyCreateManyArgs} args - Arguments to create many Dailies.
     * @example
     * // Create many Dailies
     * const daily = await prisma.daily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyCreateManyArgs>(args?: SelectSubset<T, DailyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dailies and returns the data saved in the database.
     * @param {DailyCreateManyAndReturnArgs} args - Arguments to create many Dailies.
     * @example
     * // Create many Dailies
     * const daily = await prisma.daily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dailies and only return the `id`
     * const dailyWithIdOnly = await prisma.daily.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Daily.
     * @param {DailyDeleteArgs} args - Arguments to delete one Daily.
     * @example
     * // Delete one Daily
     * const Daily = await prisma.daily.delete({
     *   where: {
     *     // ... filter to delete one Daily
     *   }
     * })
     * 
     */
    delete<T extends DailyDeleteArgs>(args: SelectSubset<T, DailyDeleteArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Daily.
     * @param {DailyUpdateArgs} args - Arguments to update one Daily.
     * @example
     * // Update one Daily
     * const daily = await prisma.daily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyUpdateArgs>(args: SelectSubset<T, DailyUpdateArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dailies.
     * @param {DailyDeleteManyArgs} args - Arguments to filter Dailies to delete.
     * @example
     * // Delete a few Dailies
     * const { count } = await prisma.daily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyDeleteManyArgs>(args?: SelectSubset<T, DailyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dailies
     * const daily = await prisma.daily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyUpdateManyArgs>(args: SelectSubset<T, DailyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dailies and returns the data updated in the database.
     * @param {DailyUpdateManyAndReturnArgs} args - Arguments to update many Dailies.
     * @example
     * // Update many Dailies
     * const daily = await prisma.daily.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dailies and only return the `id`
     * const dailyWithIdOnly = await prisma.daily.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Daily.
     * @param {DailyUpsertArgs} args - Arguments to update or create a Daily.
     * @example
     * // Update or create a Daily
     * const daily = await prisma.daily.upsert({
     *   create: {
     *     // ... data to create a Daily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Daily we want to update
     *   }
     * })
     */
    upsert<T extends DailyUpsertArgs>(args: SelectSubset<T, DailyUpsertArgs<ExtArgs>>): Prisma__DailyClient<$Result.GetResult<Prisma.$DailyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCountArgs} args - Arguments to filter Dailies to count.
     * @example
     * // Count the number of Dailies
     * const count = await prisma.daily.count({
     *   where: {
     *     // ... the filter for the Dailies we want to count
     *   }
     * })
    **/
    count<T extends DailyCountArgs>(
      args?: Subset<T, DailyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Daily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyAggregateArgs>(args: Subset<T, DailyAggregateArgs>): Prisma.PrismaPromise<GetDailyAggregateType<T>>

    /**
     * Group by Daily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyGroupByArgs['orderBy'] }
        : { orderBy?: DailyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Daily model
   */
  readonly fields: DailyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Daily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends Daily$mealArgs<ExtArgs> = {}>(args?: Subset<T, Daily$mealArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Daily model
   */
  interface DailyFieldRefs {
    readonly id: FieldRef<"Daily", 'Int'>
    readonly data: FieldRef<"Daily", 'String'>
    readonly userId: FieldRef<"Daily", 'Int'>
    readonly created_at: FieldRef<"Daily", 'DateTime'>
    readonly updated_at: FieldRef<"Daily", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Daily findUnique
   */
  export type DailyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * Filter, which Daily to fetch.
     */
    where: DailyWhereUniqueInput
  }

  /**
   * Daily findUniqueOrThrow
   */
  export type DailyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * Filter, which Daily to fetch.
     */
    where: DailyWhereUniqueInput
  }

  /**
   * Daily findFirst
   */
  export type DailyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * Filter, which Daily to fetch.
     */
    where?: DailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dailies to fetch.
     */
    orderBy?: DailyOrderByWithRelationInput | DailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dailies.
     */
    cursor?: DailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dailies.
     */
    distinct?: DailyScalarFieldEnum | DailyScalarFieldEnum[]
  }

  /**
   * Daily findFirstOrThrow
   */
  export type DailyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * Filter, which Daily to fetch.
     */
    where?: DailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dailies to fetch.
     */
    orderBy?: DailyOrderByWithRelationInput | DailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dailies.
     */
    cursor?: DailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dailies.
     */
    distinct?: DailyScalarFieldEnum | DailyScalarFieldEnum[]
  }

  /**
   * Daily findMany
   */
  export type DailyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * Filter, which Dailies to fetch.
     */
    where?: DailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dailies to fetch.
     */
    orderBy?: DailyOrderByWithRelationInput | DailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dailies.
     */
    cursor?: DailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dailies.
     */
    skip?: number
    distinct?: DailyScalarFieldEnum | DailyScalarFieldEnum[]
  }

  /**
   * Daily create
   */
  export type DailyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * The data needed to create a Daily.
     */
    data: XOR<DailyCreateInput, DailyUncheckedCreateInput>
  }

  /**
   * Daily createMany
   */
  export type DailyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dailies.
     */
    data: DailyCreateManyInput | DailyCreateManyInput[]
  }

  /**
   * Daily createManyAndReturn
   */
  export type DailyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * The data used to create many Dailies.
     */
    data: DailyCreateManyInput | DailyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Daily update
   */
  export type DailyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * The data needed to update a Daily.
     */
    data: XOR<DailyUpdateInput, DailyUncheckedUpdateInput>
    /**
     * Choose, which Daily to update.
     */
    where: DailyWhereUniqueInput
  }

  /**
   * Daily updateMany
   */
  export type DailyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dailies.
     */
    data: XOR<DailyUpdateManyMutationInput, DailyUncheckedUpdateManyInput>
    /**
     * Filter which Dailies to update
     */
    where?: DailyWhereInput
    /**
     * Limit how many Dailies to update.
     */
    limit?: number
  }

  /**
   * Daily updateManyAndReturn
   */
  export type DailyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * The data used to update Dailies.
     */
    data: XOR<DailyUpdateManyMutationInput, DailyUncheckedUpdateManyInput>
    /**
     * Filter which Dailies to update
     */
    where?: DailyWhereInput
    /**
     * Limit how many Dailies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Daily upsert
   */
  export type DailyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * The filter to search for the Daily to update in case it exists.
     */
    where: DailyWhereUniqueInput
    /**
     * In case the Daily found by the `where` argument doesn't exist, create a new Daily with this data.
     */
    create: XOR<DailyCreateInput, DailyUncheckedCreateInput>
    /**
     * In case the Daily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyUpdateInput, DailyUncheckedUpdateInput>
  }

  /**
   * Daily delete
   */
  export type DailyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
    /**
     * Filter which Daily to delete.
     */
    where: DailyWhereUniqueInput
  }

  /**
   * Daily deleteMany
   */
  export type DailyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dailies to delete
     */
    where?: DailyWhereInput
    /**
     * Limit how many Dailies to delete.
     */
    limit?: number
  }

  /**
   * Daily.meal
   */
  export type Daily$mealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Daily without action
   */
  export type DailyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Daily
     */
    select?: DailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Daily
     */
    omit?: DailyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nome: 'nome',
    sobrenome: 'sobrenome',
    idade: 'idade',
    peso_init: 'peso_init',
    peso_now: 'peso_now',
    altura: 'altura',
    atividade: 'atividade',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    alimento: 'alimento',
    porcao: 'porcao',
    calorias_kcal: 'calorias_kcal',
    carboidratos_g: 'carboidratos_g',
    proteinas_g: 'proteinas_g',
    gorduras_g: 'gorduras_g',
    fibras_g: 'fibras_g',
    sodio_mg: 'sodio_mg',
    mealId: 'mealId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    porcao: 'porcao',
    calorias_kcal: 'calorias_kcal',
    carboidratos_g: 'carboidratos_g',
    proteinas_g: 'proteinas_g',
    gorduras_g: 'gorduras_g',
    fibras_g: 'fibras_g',
    sodio_mg: 'sodio_mg',
    dailyId: 'dailyId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const DailyScalarFieldEnum: {
    id: 'id',
    data: 'data',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DailyScalarFieldEnum = (typeof DailyScalarFieldEnum)[keyof typeof DailyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Activity'
   */
  export type EnumActivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Activity'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    sobrenome?: StringFilter<"User"> | string
    idade?: IntFilter<"User"> | number
    peso_init?: FloatFilter<"User"> | number
    peso_now?: FloatFilter<"User"> | number
    altura?: FloatFilter<"User"> | number
    atividade?: EnumActivityFilter<"User"> | $Enums.Activity
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    daily?: DailyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    peso_init?: SortOrder
    peso_now?: SortOrder
    altura?: SortOrder
    atividade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    daily?: DailyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    sobrenome?: StringFilter<"User"> | string
    idade?: IntFilter<"User"> | number
    peso_init?: FloatFilter<"User"> | number
    peso_now?: FloatFilter<"User"> | number
    altura?: FloatFilter<"User"> | number
    atividade?: EnumActivityFilter<"User"> | $Enums.Activity
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    daily?: DailyListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    peso_init?: SortOrder
    peso_now?: SortOrder
    altura?: SortOrder
    atividade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    sobrenome?: StringWithAggregatesFilter<"User"> | string
    idade?: IntWithAggregatesFilter<"User"> | number
    peso_init?: FloatWithAggregatesFilter<"User"> | number
    peso_now?: FloatWithAggregatesFilter<"User"> | number
    altura?: FloatWithAggregatesFilter<"User"> | number
    atividade?: EnumActivityWithAggregatesFilter<"User"> | $Enums.Activity
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    alimento?: StringNullableFilter<"Item"> | string | null
    porcao?: StringNullableFilter<"Item"> | string | null
    calorias_kcal?: FloatNullableFilter<"Item"> | number | null
    carboidratos_g?: FloatNullableFilter<"Item"> | number | null
    proteinas_g?: FloatNullableFilter<"Item"> | number | null
    gorduras_g?: FloatNullableFilter<"Item"> | number | null
    fibras_g?: FloatNullableFilter<"Item"> | number | null
    sodio_mg?: FloatNullableFilter<"Item"> | number | null
    mealId?: IntFilter<"Item"> | number
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    alimento?: SortOrderInput | SortOrder
    porcao?: SortOrderInput | SortOrder
    calorias_kcal?: SortOrderInput | SortOrder
    carboidratos_g?: SortOrderInput | SortOrder
    proteinas_g?: SortOrderInput | SortOrder
    gorduras_g?: SortOrderInput | SortOrder
    fibras_g?: SortOrderInput | SortOrder
    sodio_mg?: SortOrderInput | SortOrder
    mealId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    meal?: MealOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    alimento?: StringNullableFilter<"Item"> | string | null
    porcao?: StringNullableFilter<"Item"> | string | null
    calorias_kcal?: FloatNullableFilter<"Item"> | number | null
    carboidratos_g?: FloatNullableFilter<"Item"> | number | null
    proteinas_g?: FloatNullableFilter<"Item"> | number | null
    gorduras_g?: FloatNullableFilter<"Item"> | number | null
    fibras_g?: FloatNullableFilter<"Item"> | number | null
    sodio_mg?: FloatNullableFilter<"Item"> | number | null
    mealId?: IntFilter<"Item"> | number
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id" | "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    alimento?: SortOrderInput | SortOrder
    porcao?: SortOrderInput | SortOrder
    calorias_kcal?: SortOrderInput | SortOrder
    carboidratos_g?: SortOrderInput | SortOrder
    proteinas_g?: SortOrderInput | SortOrder
    gorduras_g?: SortOrderInput | SortOrder
    fibras_g?: SortOrderInput | SortOrder
    sodio_mg?: SortOrderInput | SortOrder
    mealId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    alimento?: StringNullableWithAggregatesFilter<"Item"> | string | null
    porcao?: StringNullableWithAggregatesFilter<"Item"> | string | null
    calorias_kcal?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    carboidratos_g?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    proteinas_g?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    gorduras_g?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    fibras_g?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    sodio_mg?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    mealId?: IntWithAggregatesFilter<"Item"> | number
    created_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    porcao?: StringFilter<"Meal"> | string
    calorias_kcal?: FloatNullableFilter<"Meal"> | number | null
    carboidratos_g?: FloatNullableFilter<"Meal"> | number | null
    proteinas_g?: FloatNullableFilter<"Meal"> | number | null
    gorduras_g?: FloatNullableFilter<"Meal"> | number | null
    fibras_g?: FloatNullableFilter<"Meal"> | number | null
    sodio_mg?: FloatNullableFilter<"Meal"> | number | null
    dailyId?: IntFilter<"Meal"> | number
    created_at?: DateTimeFilter<"Meal"> | Date | string
    updated_at?: DateTimeFilter<"Meal"> | Date | string
    alimentos?: ItemListRelationFilter
    daily?: XOR<DailyScalarRelationFilter, DailyWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrderInput | SortOrder
    carboidratos_g?: SortOrderInput | SortOrder
    proteinas_g?: SortOrderInput | SortOrder
    gorduras_g?: SortOrderInput | SortOrder
    fibras_g?: SortOrderInput | SortOrder
    sodio_mg?: SortOrderInput | SortOrder
    dailyId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    alimentos?: ItemOrderByRelationAggregateInput
    daily?: DailyOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    porcao?: StringFilter<"Meal"> | string
    calorias_kcal?: FloatNullableFilter<"Meal"> | number | null
    carboidratos_g?: FloatNullableFilter<"Meal"> | number | null
    proteinas_g?: FloatNullableFilter<"Meal"> | number | null
    gorduras_g?: FloatNullableFilter<"Meal"> | number | null
    fibras_g?: FloatNullableFilter<"Meal"> | number | null
    sodio_mg?: FloatNullableFilter<"Meal"> | number | null
    dailyId?: IntFilter<"Meal"> | number
    created_at?: DateTimeFilter<"Meal"> | Date | string
    updated_at?: DateTimeFilter<"Meal"> | Date | string
    alimentos?: ItemListRelationFilter
    daily?: XOR<DailyScalarRelationFilter, DailyWhereInput>
  }, "id" | "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrderInput | SortOrder
    carboidratos_g?: SortOrderInput | SortOrder
    proteinas_g?: SortOrderInput | SortOrder
    gorduras_g?: SortOrderInput | SortOrder
    fibras_g?: SortOrderInput | SortOrder
    sodio_mg?: SortOrderInput | SortOrder
    dailyId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    porcao?: StringWithAggregatesFilter<"Meal"> | string
    calorias_kcal?: FloatNullableWithAggregatesFilter<"Meal"> | number | null
    carboidratos_g?: FloatNullableWithAggregatesFilter<"Meal"> | number | null
    proteinas_g?: FloatNullableWithAggregatesFilter<"Meal"> | number | null
    gorduras_g?: FloatNullableWithAggregatesFilter<"Meal"> | number | null
    fibras_g?: FloatNullableWithAggregatesFilter<"Meal"> | number | null
    sodio_mg?: FloatNullableWithAggregatesFilter<"Meal"> | number | null
    dailyId?: IntWithAggregatesFilter<"Meal"> | number
    created_at?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type DailyWhereInput = {
    AND?: DailyWhereInput | DailyWhereInput[]
    OR?: DailyWhereInput[]
    NOT?: DailyWhereInput | DailyWhereInput[]
    id?: IntFilter<"Daily"> | number
    data?: StringFilter<"Daily"> | string
    userId?: IntFilter<"Daily"> | number
    created_at?: DateTimeFilter<"Daily"> | Date | string
    updated_at?: DateTimeFilter<"Daily"> | Date | string
    meal?: MealListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    meal?: MealOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type DailyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyWhereInput | DailyWhereInput[]
    OR?: DailyWhereInput[]
    NOT?: DailyWhereInput | DailyWhereInput[]
    data?: StringFilter<"Daily"> | string
    userId?: IntFilter<"Daily"> | number
    created_at?: DateTimeFilter<"Daily"> | Date | string
    updated_at?: DateTimeFilter<"Daily"> | Date | string
    meal?: MealListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type DailyOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DailyCountOrderByAggregateInput
    _avg?: DailyAvgOrderByAggregateInput
    _max?: DailyMaxOrderByAggregateInput
    _min?: DailyMinOrderByAggregateInput
    _sum?: DailySumOrderByAggregateInput
  }

  export type DailyScalarWhereWithAggregatesInput = {
    AND?: DailyScalarWhereWithAggregatesInput | DailyScalarWhereWithAggregatesInput[]
    OR?: DailyScalarWhereWithAggregatesInput[]
    NOT?: DailyScalarWhereWithAggregatesInput | DailyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Daily"> | number
    data?: StringWithAggregatesFilter<"Daily"> | string
    userId?: IntWithAggregatesFilter<"Daily"> | number
    created_at?: DateTimeWithAggregatesFilter<"Daily"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Daily"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    nome: string
    sobrenome: string
    idade: number
    peso_init: number
    peso_now: number
    altura: number
    atividade: $Enums.Activity
    created_at?: Date | string
    updated_at?: Date | string
    daily?: DailyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nome: string
    sobrenome: string
    idade: number
    peso_init: number
    peso_now: number
    altura: number
    atividade: $Enums.Activity
    created_at?: Date | string
    updated_at?: Date | string
    daily?: DailyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    peso_init?: FloatFieldUpdateOperationsInput | number
    peso_now?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    atividade?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily?: DailyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    peso_init?: FloatFieldUpdateOperationsInput | number
    peso_now?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    atividade?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily?: DailyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    nome: string
    sobrenome: string
    idade: number
    peso_init: number
    peso_now: number
    altura: number
    atividade: $Enums.Activity
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    peso_init?: FloatFieldUpdateOperationsInput | number
    peso_now?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    atividade?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    peso_init?: FloatFieldUpdateOperationsInput | number
    peso_now?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    atividade?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    alimento?: string | null
    porcao?: string | null
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    meal: MealCreateNestedOneWithoutAlimentosInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    alimento?: string | null
    porcao?: string | null
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    mealId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemUpdateInput = {
    alimento?: NullableStringFieldUpdateOperationsInput | string | null
    porcao?: NullableStringFieldUpdateOperationsInput | string | null
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutAlimentosNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alimento?: NullableStringFieldUpdateOperationsInput | string | null
    porcao?: NullableStringFieldUpdateOperationsInput | string | null
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    mealId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    alimento?: string | null
    porcao?: string | null
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    mealId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    alimento?: NullableStringFieldUpdateOperationsInput | string | null
    porcao?: NullableStringFieldUpdateOperationsInput | string | null
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alimento?: NullableStringFieldUpdateOperationsInput | string | null
    porcao?: NullableStringFieldUpdateOperationsInput | string | null
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    mealId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateInput = {
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    alimentos?: ItemCreateNestedManyWithoutMealInput
    daily: DailyCreateNestedOneWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    dailyId: number
    created_at?: Date | string
    updated_at?: Date | string
    alimentos?: ItemUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alimentos?: ItemUpdateManyWithoutMealNestedInput
    daily?: DailyUpdateOneRequiredWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alimentos?: ItemUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    dailyId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyCreateInput = {
    data: string
    created_at?: Date | string
    updated_at?: Date | string
    meal?: MealCreateNestedManyWithoutDailyInput
    user: UserCreateNestedOneWithoutDailyInput
  }

  export type DailyUncheckedCreateInput = {
    id?: number
    data: string
    userId: number
    created_at?: Date | string
    updated_at?: Date | string
    meal?: MealUncheckedCreateNestedManyWithoutDailyInput
  }

  export type DailyUpdateInput = {
    data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateManyWithoutDailyNestedInput
    user?: UserUpdateOneRequiredWithoutDailyNestedInput
  }

  export type DailyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUncheckedUpdateManyWithoutDailyNestedInput
  }

  export type DailyCreateManyInput = {
    id?: number
    data: string
    userId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DailyUpdateManyMutationInput = {
    data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumActivityFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[]
    notIn?: $Enums.Activity[]
    not?: NestedEnumActivityFilter<$PrismaModel> | $Enums.Activity
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DailyListRelationFilter = {
    every?: DailyWhereInput
    some?: DailyWhereInput
    none?: DailyWhereInput
  }

  export type DailyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    peso_init?: SortOrder
    peso_now?: SortOrder
    altura?: SortOrder
    atividade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    peso_init?: SortOrder
    peso_now?: SortOrder
    altura?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    peso_init?: SortOrder
    peso_now?: SortOrder
    altura?: SortOrder
    atividade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    idade?: SortOrder
    peso_init?: SortOrder
    peso_now?: SortOrder
    altura?: SortOrder
    atividade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    peso_init?: SortOrder
    peso_now?: SortOrder
    altura?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumActivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[]
    notIn?: $Enums.Activity[]
    not?: NestedEnumActivityWithAggregatesFilter<$PrismaModel> | $Enums.Activity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityFilter<$PrismaModel>
    _max?: NestedEnumActivityFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    alimento?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    mealId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    mealId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    alimento?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    mealId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    alimento?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    mealId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    mealId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type DailyScalarRelationFilter = {
    is?: DailyWhereInput
    isNot?: DailyWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    dailyId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    dailyId?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    dailyId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    porcao?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    dailyId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    calorias_kcal?: SortOrder
    carboidratos_g?: SortOrder
    proteinas_g?: SortOrder
    gorduras_g?: SortOrder
    fibras_g?: SortOrder
    sodio_mg?: SortOrder
    dailyId?: SortOrder
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DailyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DailyMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DailySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyCreateWithoutUserInput, DailyUncheckedCreateWithoutUserInput> | DailyCreateWithoutUserInput[] | DailyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyCreateOrConnectWithoutUserInput | DailyCreateOrConnectWithoutUserInput[]
    createMany?: DailyCreateManyUserInputEnvelope
    connect?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
  }

  export type DailyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyCreateWithoutUserInput, DailyUncheckedCreateWithoutUserInput> | DailyCreateWithoutUserInput[] | DailyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyCreateOrConnectWithoutUserInput | DailyCreateOrConnectWithoutUserInput[]
    createMany?: DailyCreateManyUserInputEnvelope
    connect?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumActivityFieldUpdateOperationsInput = {
    set?: $Enums.Activity
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DailyUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyCreateWithoutUserInput, DailyUncheckedCreateWithoutUserInput> | DailyCreateWithoutUserInput[] | DailyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyCreateOrConnectWithoutUserInput | DailyCreateOrConnectWithoutUserInput[]
    upsert?: DailyUpsertWithWhereUniqueWithoutUserInput | DailyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyCreateManyUserInputEnvelope
    set?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    disconnect?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    delete?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    connect?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    update?: DailyUpdateWithWhereUniqueWithoutUserInput | DailyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyUpdateManyWithWhereWithoutUserInput | DailyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyScalarWhereInput | DailyScalarWhereInput[]
  }

  export type DailyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyCreateWithoutUserInput, DailyUncheckedCreateWithoutUserInput> | DailyCreateWithoutUserInput[] | DailyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyCreateOrConnectWithoutUserInput | DailyCreateOrConnectWithoutUserInput[]
    upsert?: DailyUpsertWithWhereUniqueWithoutUserInput | DailyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyCreateManyUserInputEnvelope
    set?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    disconnect?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    delete?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    connect?: DailyWhereUniqueInput | DailyWhereUniqueInput[]
    update?: DailyUpdateWithWhereUniqueWithoutUserInput | DailyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyUpdateManyWithWhereWithoutUserInput | DailyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyScalarWhereInput | DailyScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutAlimentosInput = {
    create?: XOR<MealCreateWithoutAlimentosInput, MealUncheckedCreateWithoutAlimentosInput>
    connectOrCreate?: MealCreateOrConnectWithoutAlimentosInput
    connect?: MealWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealUpdateOneRequiredWithoutAlimentosNestedInput = {
    create?: XOR<MealCreateWithoutAlimentosInput, MealUncheckedCreateWithoutAlimentosInput>
    connectOrCreate?: MealCreateOrConnectWithoutAlimentosInput
    upsert?: MealUpsertWithoutAlimentosInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutAlimentosInput, MealUpdateWithoutAlimentosInput>, MealUncheckedUpdateWithoutAlimentosInput>
  }

  export type ItemCreateNestedManyWithoutMealInput = {
    create?: XOR<ItemCreateWithoutMealInput, ItemUncheckedCreateWithoutMealInput> | ItemCreateWithoutMealInput[] | ItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutMealInput | ItemCreateOrConnectWithoutMealInput[]
    createMany?: ItemCreateManyMealInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type DailyCreateNestedOneWithoutMealInput = {
    create?: XOR<DailyCreateWithoutMealInput, DailyUncheckedCreateWithoutMealInput>
    connectOrCreate?: DailyCreateOrConnectWithoutMealInput
    connect?: DailyWhereUniqueInput
  }

  export type ItemUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<ItemCreateWithoutMealInput, ItemUncheckedCreateWithoutMealInput> | ItemCreateWithoutMealInput[] | ItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutMealInput | ItemCreateOrConnectWithoutMealInput[]
    createMany?: ItemCreateManyMealInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutMealNestedInput = {
    create?: XOR<ItemCreateWithoutMealInput, ItemUncheckedCreateWithoutMealInput> | ItemCreateWithoutMealInput[] | ItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutMealInput | ItemCreateOrConnectWithoutMealInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutMealInput | ItemUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: ItemCreateManyMealInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutMealInput | ItemUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutMealInput | ItemUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type DailyUpdateOneRequiredWithoutMealNestedInput = {
    create?: XOR<DailyCreateWithoutMealInput, DailyUncheckedCreateWithoutMealInput>
    connectOrCreate?: DailyCreateOrConnectWithoutMealInput
    upsert?: DailyUpsertWithoutMealInput
    connect?: DailyWhereUniqueInput
    update?: XOR<XOR<DailyUpdateToOneWithWhereWithoutMealInput, DailyUpdateWithoutMealInput>, DailyUncheckedUpdateWithoutMealInput>
  }

  export type ItemUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<ItemCreateWithoutMealInput, ItemUncheckedCreateWithoutMealInput> | ItemCreateWithoutMealInput[] | ItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutMealInput | ItemCreateOrConnectWithoutMealInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutMealInput | ItemUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: ItemCreateManyMealInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutMealInput | ItemUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutMealInput | ItemUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type MealCreateNestedManyWithoutDailyInput = {
    create?: XOR<MealCreateWithoutDailyInput, MealUncheckedCreateWithoutDailyInput> | MealCreateWithoutDailyInput[] | MealUncheckedCreateWithoutDailyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyInput | MealCreateOrConnectWithoutDailyInput[]
    createMany?: MealCreateManyDailyInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDailyInput = {
    create?: XOR<UserCreateWithoutDailyInput, UserUncheckedCreateWithoutDailyInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyInput
    connect?: UserWhereUniqueInput
  }

  export type MealUncheckedCreateNestedManyWithoutDailyInput = {
    create?: XOR<MealCreateWithoutDailyInput, MealUncheckedCreateWithoutDailyInput> | MealCreateWithoutDailyInput[] | MealUncheckedCreateWithoutDailyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyInput | MealCreateOrConnectWithoutDailyInput[]
    createMany?: MealCreateManyDailyInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type MealUpdateManyWithoutDailyNestedInput = {
    create?: XOR<MealCreateWithoutDailyInput, MealUncheckedCreateWithoutDailyInput> | MealCreateWithoutDailyInput[] | MealUncheckedCreateWithoutDailyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyInput | MealCreateOrConnectWithoutDailyInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyInput | MealUpsertWithWhereUniqueWithoutDailyInput[]
    createMany?: MealCreateManyDailyInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyInput | MealUpdateWithWhereUniqueWithoutDailyInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyInput | MealUpdateManyWithWhereWithoutDailyInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutDailyNestedInput = {
    create?: XOR<UserCreateWithoutDailyInput, UserUncheckedCreateWithoutDailyInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyInput
    upsert?: UserUpsertWithoutDailyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyInput, UserUpdateWithoutDailyInput>, UserUncheckedUpdateWithoutDailyInput>
  }

  export type MealUncheckedUpdateManyWithoutDailyNestedInput = {
    create?: XOR<MealCreateWithoutDailyInput, MealUncheckedCreateWithoutDailyInput> | MealCreateWithoutDailyInput[] | MealUncheckedCreateWithoutDailyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyInput | MealCreateOrConnectWithoutDailyInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyInput | MealUpsertWithWhereUniqueWithoutDailyInput[]
    createMany?: MealCreateManyDailyInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyInput | MealUpdateWithWhereUniqueWithoutDailyInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyInput | MealUpdateManyWithWhereWithoutDailyInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumActivityFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[]
    notIn?: $Enums.Activity[]
    not?: NestedEnumActivityFilter<$PrismaModel> | $Enums.Activity
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumActivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Activity | EnumActivityFieldRefInput<$PrismaModel>
    in?: $Enums.Activity[]
    notIn?: $Enums.Activity[]
    not?: NestedEnumActivityWithAggregatesFilter<$PrismaModel> | $Enums.Activity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityFilter<$PrismaModel>
    _max?: NestedEnumActivityFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DailyCreateWithoutUserInput = {
    data: string
    created_at?: Date | string
    updated_at?: Date | string
    meal?: MealCreateNestedManyWithoutDailyInput
  }

  export type DailyUncheckedCreateWithoutUserInput = {
    id?: number
    data: string
    created_at?: Date | string
    updated_at?: Date | string
    meal?: MealUncheckedCreateNestedManyWithoutDailyInput
  }

  export type DailyCreateOrConnectWithoutUserInput = {
    where: DailyWhereUniqueInput
    create: XOR<DailyCreateWithoutUserInput, DailyUncheckedCreateWithoutUserInput>
  }

  export type DailyCreateManyUserInputEnvelope = {
    data: DailyCreateManyUserInput | DailyCreateManyUserInput[]
  }

  export type DailyUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyWhereUniqueInput
    update: XOR<DailyUpdateWithoutUserInput, DailyUncheckedUpdateWithoutUserInput>
    create: XOR<DailyCreateWithoutUserInput, DailyUncheckedCreateWithoutUserInput>
  }

  export type DailyUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyWhereUniqueInput
    data: XOR<DailyUpdateWithoutUserInput, DailyUncheckedUpdateWithoutUserInput>
  }

  export type DailyUpdateManyWithWhereWithoutUserInput = {
    where: DailyScalarWhereInput
    data: XOR<DailyUpdateManyMutationInput, DailyUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyScalarWhereInput = {
    AND?: DailyScalarWhereInput | DailyScalarWhereInput[]
    OR?: DailyScalarWhereInput[]
    NOT?: DailyScalarWhereInput | DailyScalarWhereInput[]
    id?: IntFilter<"Daily"> | number
    data?: StringFilter<"Daily"> | string
    userId?: IntFilter<"Daily"> | number
    created_at?: DateTimeFilter<"Daily"> | Date | string
    updated_at?: DateTimeFilter<"Daily"> | Date | string
  }

  export type MealCreateWithoutAlimentosInput = {
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    daily: DailyCreateNestedOneWithoutMealInput
  }

  export type MealUncheckedCreateWithoutAlimentosInput = {
    id?: number
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    dailyId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealCreateOrConnectWithoutAlimentosInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutAlimentosInput, MealUncheckedCreateWithoutAlimentosInput>
  }

  export type MealUpsertWithoutAlimentosInput = {
    update: XOR<MealUpdateWithoutAlimentosInput, MealUncheckedUpdateWithoutAlimentosInput>
    create: XOR<MealCreateWithoutAlimentosInput, MealUncheckedCreateWithoutAlimentosInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutAlimentosInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutAlimentosInput, MealUncheckedUpdateWithoutAlimentosInput>
  }

  export type MealUpdateWithoutAlimentosInput = {
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily?: DailyUpdateOneRequiredWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutAlimentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateWithoutMealInput = {
    alimento?: string | null
    porcao?: string | null
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemUncheckedCreateWithoutMealInput = {
    id?: number
    alimento?: string | null
    porcao?: string | null
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemCreateOrConnectWithoutMealInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutMealInput, ItemUncheckedCreateWithoutMealInput>
  }

  export type ItemCreateManyMealInputEnvelope = {
    data: ItemCreateManyMealInput | ItemCreateManyMealInput[]
  }

  export type DailyCreateWithoutMealInput = {
    data: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutDailyInput
  }

  export type DailyUncheckedCreateWithoutMealInput = {
    id?: number
    data: string
    userId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DailyCreateOrConnectWithoutMealInput = {
    where: DailyWhereUniqueInput
    create: XOR<DailyCreateWithoutMealInput, DailyUncheckedCreateWithoutMealInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutMealInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutMealInput, ItemUncheckedUpdateWithoutMealInput>
    create: XOR<ItemCreateWithoutMealInput, ItemUncheckedCreateWithoutMealInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutMealInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutMealInput, ItemUncheckedUpdateWithoutMealInput>
  }

  export type ItemUpdateManyWithWhereWithoutMealInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutMealInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    alimento?: StringNullableFilter<"Item"> | string | null
    porcao?: StringNullableFilter<"Item"> | string | null
    calorias_kcal?: FloatNullableFilter<"Item"> | number | null
    carboidratos_g?: FloatNullableFilter<"Item"> | number | null
    proteinas_g?: FloatNullableFilter<"Item"> | number | null
    gorduras_g?: FloatNullableFilter<"Item"> | number | null
    fibras_g?: FloatNullableFilter<"Item"> | number | null
    sodio_mg?: FloatNullableFilter<"Item"> | number | null
    mealId?: IntFilter<"Item"> | number
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
  }

  export type DailyUpsertWithoutMealInput = {
    update: XOR<DailyUpdateWithoutMealInput, DailyUncheckedUpdateWithoutMealInput>
    create: XOR<DailyCreateWithoutMealInput, DailyUncheckedCreateWithoutMealInput>
    where?: DailyWhereInput
  }

  export type DailyUpdateToOneWithWhereWithoutMealInput = {
    where?: DailyWhereInput
    data: XOR<DailyUpdateWithoutMealInput, DailyUncheckedUpdateWithoutMealInput>
  }

  export type DailyUpdateWithoutMealInput = {
    data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyNestedInput
  }

  export type DailyUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateWithoutDailyInput = {
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    alimentos?: ItemCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutDailyInput = {
    id?: number
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    alimentos?: ItemUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutDailyInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutDailyInput, MealUncheckedCreateWithoutDailyInput>
  }

  export type MealCreateManyDailyInputEnvelope = {
    data: MealCreateManyDailyInput | MealCreateManyDailyInput[]
  }

  export type UserCreateWithoutDailyInput = {
    email: string
    password: string
    nome: string
    sobrenome: string
    idade: number
    peso_init: number
    peso_now: number
    altura: number
    atividade: $Enums.Activity
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutDailyInput = {
    id?: number
    email: string
    password: string
    nome: string
    sobrenome: string
    idade: number
    peso_init: number
    peso_now: number
    altura: number
    atividade: $Enums.Activity
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutDailyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyInput, UserUncheckedCreateWithoutDailyInput>
  }

  export type MealUpsertWithWhereUniqueWithoutDailyInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutDailyInput, MealUncheckedUpdateWithoutDailyInput>
    create: XOR<MealCreateWithoutDailyInput, MealUncheckedCreateWithoutDailyInput>
  }

  export type MealUpdateWithWhereUniqueWithoutDailyInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutDailyInput, MealUncheckedUpdateWithoutDailyInput>
  }

  export type MealUpdateManyWithWhereWithoutDailyInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutDailyInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: IntFilter<"Meal"> | number
    porcao?: StringFilter<"Meal"> | string
    calorias_kcal?: FloatNullableFilter<"Meal"> | number | null
    carboidratos_g?: FloatNullableFilter<"Meal"> | number | null
    proteinas_g?: FloatNullableFilter<"Meal"> | number | null
    gorduras_g?: FloatNullableFilter<"Meal"> | number | null
    fibras_g?: FloatNullableFilter<"Meal"> | number | null
    sodio_mg?: FloatNullableFilter<"Meal"> | number | null
    dailyId?: IntFilter<"Meal"> | number
    created_at?: DateTimeFilter<"Meal"> | Date | string
    updated_at?: DateTimeFilter<"Meal"> | Date | string
  }

  export type UserUpsertWithoutDailyInput = {
    update: XOR<UserUpdateWithoutDailyInput, UserUncheckedUpdateWithoutDailyInput>
    create: XOR<UserCreateWithoutDailyInput, UserUncheckedCreateWithoutDailyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyInput, UserUncheckedUpdateWithoutDailyInput>
  }

  export type UserUpdateWithoutDailyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    peso_init?: FloatFieldUpdateOperationsInput | number
    peso_now?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    atividade?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDailyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    peso_init?: FloatFieldUpdateOperationsInput | number
    peso_now?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    atividade?: EnumActivityFieldUpdateOperationsInput | $Enums.Activity
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyCreateManyUserInput = {
    id?: number
    data: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DailyUpdateWithoutUserInput = {
    data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateManyWithoutDailyNestedInput
  }

  export type DailyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUncheckedUpdateManyWithoutDailyNestedInput
  }

  export type DailyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyMealInput = {
    id?: number
    alimento?: string | null
    porcao?: string | null
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemUpdateWithoutMealInput = {
    alimento?: NullableStringFieldUpdateOperationsInput | string | null
    porcao?: NullableStringFieldUpdateOperationsInput | string | null
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    alimento?: NullableStringFieldUpdateOperationsInput | string | null
    porcao?: NullableStringFieldUpdateOperationsInput | string | null
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    alimento?: NullableStringFieldUpdateOperationsInput | string | null
    porcao?: NullableStringFieldUpdateOperationsInput | string | null
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateManyDailyInput = {
    id?: number
    porcao: string
    calorias_kcal?: number | null
    carboidratos_g?: number | null
    proteinas_g?: number | null
    gorduras_g?: number | null
    fibras_g?: number | null
    sodio_mg?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealUpdateWithoutDailyInput = {
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alimentos?: ItemUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutDailyInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alimentos?: ItemUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutDailyInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcao?: StringFieldUpdateOperationsInput | string
    calorias_kcal?: NullableFloatFieldUpdateOperationsInput | number | null
    carboidratos_g?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinas_g?: NullableFloatFieldUpdateOperationsInput | number | null
    gorduras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    fibras_g?: NullableFloatFieldUpdateOperationsInput | number | null
    sodio_mg?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}