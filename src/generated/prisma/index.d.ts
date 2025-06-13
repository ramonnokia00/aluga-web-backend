
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
 * Model favoritos
 * 
 */
export type favoritos = $Result.DefaultSelection<Prisma.$favoritosPayload>
/**
 * Model imoveis
 * 
 */
export type imoveis = $Result.DefaultSelection<Prisma.$imoveisPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Favoritos
 * const favoritos = await prisma.favoritos.findMany()
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
   * // Fetch zero or more Favoritos
   * const favoritos = await prisma.favoritos.findMany()
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
   * `prisma.favoritos`: Exposes CRUD operations for the **favoritos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favoritos.findMany()
    * ```
    */
  get favoritos(): Prisma.favoritosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imoveis`: Exposes CRUD operations for the **imoveis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imoveis
    * const imoveis = await prisma.imoveis.findMany()
    * ```
    */
  get imoveis(): Prisma.imoveisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    favoritos: 'favoritos',
    imoveis: 'imoveis',
    usuarios: 'usuarios'
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
      modelProps: "favoritos" | "imoveis" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      favoritos: {
        payload: Prisma.$favoritosPayload<ExtArgs>
        fields: Prisma.favoritosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favoritosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favoritosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload>
          }
          findFirst: {
            args: Prisma.favoritosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favoritosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload>
          }
          findMany: {
            args: Prisma.favoritosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload>[]
          }
          create: {
            args: Prisma.favoritosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload>
          }
          createMany: {
            args: Prisma.favoritosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.favoritosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload>
          }
          update: {
            args: Prisma.favoritosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload>
          }
          deleteMany: {
            args: Prisma.favoritosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favoritosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.favoritosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritosPayload>
          }
          aggregate: {
            args: Prisma.FavoritosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoritos>
          }
          groupBy: {
            args: Prisma.favoritosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritosGroupByOutputType>[]
          }
          count: {
            args: Prisma.favoritosCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritosCountAggregateOutputType> | number
          }
        }
      }
      imoveis: {
        payload: Prisma.$imoveisPayload<ExtArgs>
        fields: Prisma.imoveisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imoveisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imoveisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload>
          }
          findFirst: {
            args: Prisma.imoveisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imoveisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload>
          }
          findMany: {
            args: Prisma.imoveisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload>[]
          }
          create: {
            args: Prisma.imoveisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload>
          }
          createMany: {
            args: Prisma.imoveisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.imoveisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload>
          }
          update: {
            args: Prisma.imoveisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload>
          }
          deleteMany: {
            args: Prisma.imoveisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imoveisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imoveisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imoveisPayload>
          }
          aggregate: {
            args: Prisma.ImoveisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImoveis>
          }
          groupBy: {
            args: Prisma.imoveisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImoveisGroupByOutputType>[]
          }
          count: {
            args: Prisma.imoveisCountArgs<ExtArgs>
            result: $Utils.Optional<ImoveisCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
    favoritos?: favoritosOmit
    imoveis?: imoveisOmit
    usuarios?: usuariosOmit
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
   * Count Type ImoveisCountOutputType
   */

  export type ImoveisCountOutputType = {
    favoritos: number
  }

  export type ImoveisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | ImoveisCountOutputTypeCountFavoritosArgs
  }

  // Custom InputTypes
  /**
   * ImoveisCountOutputType without action
   */
  export type ImoveisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImoveisCountOutputType
     */
    select?: ImoveisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImoveisCountOutputType without action
   */
  export type ImoveisCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    favoritos: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | UsuariosCountOutputTypeCountFavoritosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model favoritos
   */

  export type AggregateFavoritos = {
    _count: FavoritosCountAggregateOutputType | null
    _avg: FavoritosAvgAggregateOutputType | null
    _sum: FavoritosSumAggregateOutputType | null
    _min: FavoritosMinAggregateOutputType | null
    _max: FavoritosMaxAggregateOutputType | null
  }

  export type FavoritosAvgAggregateOutputType = {
    favorito_id: number | null
    usuario_id: number | null
    imovel_id: number | null
  }

  export type FavoritosSumAggregateOutputType = {
    favorito_id: number | null
    usuario_id: number | null
    imovel_id: number | null
  }

  export type FavoritosMinAggregateOutputType = {
    favorito_id: number | null
    usuario_id: number | null
    imovel_id: number | null
  }

  export type FavoritosMaxAggregateOutputType = {
    favorito_id: number | null
    usuario_id: number | null
    imovel_id: number | null
  }

  export type FavoritosCountAggregateOutputType = {
    favorito_id: number
    usuario_id: number
    imovel_id: number
    _all: number
  }


  export type FavoritosAvgAggregateInputType = {
    favorito_id?: true
    usuario_id?: true
    imovel_id?: true
  }

  export type FavoritosSumAggregateInputType = {
    favorito_id?: true
    usuario_id?: true
    imovel_id?: true
  }

  export type FavoritosMinAggregateInputType = {
    favorito_id?: true
    usuario_id?: true
    imovel_id?: true
  }

  export type FavoritosMaxAggregateInputType = {
    favorito_id?: true
    usuario_id?: true
    imovel_id?: true
  }

  export type FavoritosCountAggregateInputType = {
    favorito_id?: true
    usuario_id?: true
    imovel_id?: true
    _all?: true
  }

  export type FavoritosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favoritos to aggregate.
     */
    where?: favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritosOrderByWithRelationInput | favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favoritos
    **/
    _count?: true | FavoritosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritosMaxAggregateInputType
  }

  export type GetFavoritosAggregateType<T extends FavoritosAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoritos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoritos[P]>
      : GetScalarType<T[P], AggregateFavoritos[P]>
  }




  export type favoritosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritosWhereInput
    orderBy?: favoritosOrderByWithAggregationInput | favoritosOrderByWithAggregationInput[]
    by: FavoritosScalarFieldEnum[] | FavoritosScalarFieldEnum
    having?: favoritosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritosCountAggregateInputType | true
    _avg?: FavoritosAvgAggregateInputType
    _sum?: FavoritosSumAggregateInputType
    _min?: FavoritosMinAggregateInputType
    _max?: FavoritosMaxAggregateInputType
  }

  export type FavoritosGroupByOutputType = {
    favorito_id: number
    usuario_id: number
    imovel_id: number
    _count: FavoritosCountAggregateOutputType | null
    _avg: FavoritosAvgAggregateOutputType | null
    _sum: FavoritosSumAggregateOutputType | null
    _min: FavoritosMinAggregateOutputType | null
    _max: FavoritosMaxAggregateOutputType | null
  }

  type GetFavoritosGroupByPayload<T extends favoritosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritosGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritosGroupByOutputType[P]>
        }
      >
    >


  export type favoritosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favorito_id?: boolean
    usuario_id?: boolean
    imovel_id?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    imoveis?: boolean | imoveisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoritos"]>



  export type favoritosSelectScalar = {
    favorito_id?: boolean
    usuario_id?: boolean
    imovel_id?: boolean
  }

  export type favoritosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"favorito_id" | "usuario_id" | "imovel_id", ExtArgs["result"]["favoritos"]>
  export type favoritosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    imoveis?: boolean | imoveisDefaultArgs<ExtArgs>
  }

  export type $favoritosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favoritos"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      imoveis: Prisma.$imoveisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      favorito_id: number
      usuario_id: number
      imovel_id: number
    }, ExtArgs["result"]["favoritos"]>
    composites: {}
  }

  type favoritosGetPayload<S extends boolean | null | undefined | favoritosDefaultArgs> = $Result.GetResult<Prisma.$favoritosPayload, S>

  type favoritosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favoritosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritosCountAggregateInputType | true
    }

  export interface favoritosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favoritos'], meta: { name: 'favoritos' } }
    /**
     * Find zero or one Favoritos that matches the filter.
     * @param {favoritosFindUniqueArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favoritosFindUniqueArgs>(args: SelectSubset<T, favoritosFindUniqueArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favoritos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favoritosFindUniqueOrThrowArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favoritosFindUniqueOrThrowArgs>(args: SelectSubset<T, favoritosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritosFindFirstArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favoritosFindFirstArgs>(args?: SelectSubset<T, favoritosFindFirstArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favoritos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritosFindFirstOrThrowArgs} args - Arguments to find a Favoritos
     * @example
     * // Get one Favoritos
     * const favoritos = await prisma.favoritos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favoritosFindFirstOrThrowArgs>(args?: SelectSubset<T, favoritosFindFirstOrThrowArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favoritos.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favoritos.findMany({ take: 10 })
     * 
     * // Only select the `favorito_id`
     * const favoritosWithFavorito_idOnly = await prisma.favoritos.findMany({ select: { favorito_id: true } })
     * 
     */
    findMany<T extends favoritosFindManyArgs>(args?: SelectSubset<T, favoritosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favoritos.
     * @param {favoritosCreateArgs} args - Arguments to create a Favoritos.
     * @example
     * // Create one Favoritos
     * const Favoritos = await prisma.favoritos.create({
     *   data: {
     *     // ... data to create a Favoritos
     *   }
     * })
     * 
     */
    create<T extends favoritosCreateArgs>(args: SelectSubset<T, favoritosCreateArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {favoritosCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favoritos = await prisma.favoritos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favoritosCreateManyArgs>(args?: SelectSubset<T, favoritosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favoritos.
     * @param {favoritosDeleteArgs} args - Arguments to delete one Favoritos.
     * @example
     * // Delete one Favoritos
     * const Favoritos = await prisma.favoritos.delete({
     *   where: {
     *     // ... filter to delete one Favoritos
     *   }
     * })
     * 
     */
    delete<T extends favoritosDeleteArgs>(args: SelectSubset<T, favoritosDeleteArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favoritos.
     * @param {favoritosUpdateArgs} args - Arguments to update one Favoritos.
     * @example
     * // Update one Favoritos
     * const favoritos = await prisma.favoritos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favoritosUpdateArgs>(args: SelectSubset<T, favoritosUpdateArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {favoritosDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favoritos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favoritosDeleteManyArgs>(args?: SelectSubset<T, favoritosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favoritos = await prisma.favoritos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favoritosUpdateManyArgs>(args: SelectSubset<T, favoritosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favoritos.
     * @param {favoritosUpsertArgs} args - Arguments to update or create a Favoritos.
     * @example
     * // Update or create a Favoritos
     * const favoritos = await prisma.favoritos.upsert({
     *   create: {
     *     // ... data to create a Favoritos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favoritos we want to update
     *   }
     * })
     */
    upsert<T extends favoritosUpsertArgs>(args: SelectSubset<T, favoritosUpsertArgs<ExtArgs>>): Prisma__favoritosClient<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritosCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favoritos.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends favoritosCountArgs>(
      args?: Subset<T, favoritosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritosAggregateArgs>(args: Subset<T, FavoritosAggregateArgs>): Prisma.PrismaPromise<GetFavoritosAggregateType<T>>

    /**
     * Group by Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritosGroupByArgs} args - Group by arguments.
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
      T extends favoritosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoritosGroupByArgs['orderBy'] }
        : { orderBy?: favoritosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favoritosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favoritos model
   */
  readonly fields: favoritosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favoritos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoritosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    imoveis<T extends imoveisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, imoveisDefaultArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the favoritos model
   */
  interface favoritosFieldRefs {
    readonly favorito_id: FieldRef<"favoritos", 'Int'>
    readonly usuario_id: FieldRef<"favoritos", 'Int'>
    readonly imovel_id: FieldRef<"favoritos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * favoritos findUnique
   */
  export type favoritosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * Filter, which favoritos to fetch.
     */
    where: favoritosWhereUniqueInput
  }

  /**
   * favoritos findUniqueOrThrow
   */
  export type favoritosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * Filter, which favoritos to fetch.
     */
    where: favoritosWhereUniqueInput
  }

  /**
   * favoritos findFirst
   */
  export type favoritosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * Filter, which favoritos to fetch.
     */
    where?: favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritosOrderByWithRelationInput | favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favoritos.
     */
    cursor?: favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favoritos.
     */
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * favoritos findFirstOrThrow
   */
  export type favoritosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * Filter, which favoritos to fetch.
     */
    where?: favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritosOrderByWithRelationInput | favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favoritos.
     */
    cursor?: favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favoritos.
     */
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * favoritos findMany
   */
  export type favoritosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * Filter, which favoritos to fetch.
     */
    where?: favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favoritos to fetch.
     */
    orderBy?: favoritosOrderByWithRelationInput | favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favoritos.
     */
    cursor?: favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favoritos.
     */
    skip?: number
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * favoritos create
   */
  export type favoritosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * The data needed to create a favoritos.
     */
    data: XOR<favoritosCreateInput, favoritosUncheckedCreateInput>
  }

  /**
   * favoritos createMany
   */
  export type favoritosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favoritos.
     */
    data: favoritosCreateManyInput | favoritosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favoritos update
   */
  export type favoritosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * The data needed to update a favoritos.
     */
    data: XOR<favoritosUpdateInput, favoritosUncheckedUpdateInput>
    /**
     * Choose, which favoritos to update.
     */
    where: favoritosWhereUniqueInput
  }

  /**
   * favoritos updateMany
   */
  export type favoritosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favoritos.
     */
    data: XOR<favoritosUpdateManyMutationInput, favoritosUncheckedUpdateManyInput>
    /**
     * Filter which favoritos to update
     */
    where?: favoritosWhereInput
    /**
     * Limit how many favoritos to update.
     */
    limit?: number
  }

  /**
   * favoritos upsert
   */
  export type favoritosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * The filter to search for the favoritos to update in case it exists.
     */
    where: favoritosWhereUniqueInput
    /**
     * In case the favoritos found by the `where` argument doesn't exist, create a new favoritos with this data.
     */
    create: XOR<favoritosCreateInput, favoritosUncheckedCreateInput>
    /**
     * In case the favoritos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoritosUpdateInput, favoritosUncheckedUpdateInput>
  }

  /**
   * favoritos delete
   */
  export type favoritosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    /**
     * Filter which favoritos to delete.
     */
    where: favoritosWhereUniqueInput
  }

  /**
   * favoritos deleteMany
   */
  export type favoritosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favoritos to delete
     */
    where?: favoritosWhereInput
    /**
     * Limit how many favoritos to delete.
     */
    limit?: number
  }

  /**
   * favoritos without action
   */
  export type favoritosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
  }


  /**
   * Model imoveis
   */

  export type AggregateImoveis = {
    _count: ImoveisCountAggregateOutputType | null
    _avg: ImoveisAvgAggregateOutputType | null
    _sum: ImoveisSumAggregateOutputType | null
    _min: ImoveisMinAggregateOutputType | null
    _max: ImoveisMaxAggregateOutputType | null
  }

  export type ImoveisAvgAggregateOutputType = {
    imovel_id: number | null
    imovel_valor: number | null
    imovel_valor_condominio: number | null
    imovel_quartos: number | null
    imovel_garagens: number | null
    imovel_banheiros: number | null
    imovel_area: number | null
  }

  export type ImoveisSumAggregateOutputType = {
    imovel_id: number | null
    imovel_valor: number | null
    imovel_valor_condominio: number | null
    imovel_quartos: number | null
    imovel_garagens: number | null
    imovel_banheiros: number | null
    imovel_area: number | null
  }

  export type ImoveisMinAggregateOutputType = {
    imovel_id: number | null
    imovel_estado: string | null
    imovel_cidade: string | null
    imovel_bairro: string | null
    imovel_logradouro: string | null
    imovel_numero: string | null
    imovel_complemento: string | null
    imovel_cep: string | null
    imovel_tipo: string | null
    imovel_modalidade: string | null
    imovel_valor: number | null
    imovel_valor_condominio: number | null
    imovel_descricao: string | null
    imovel_quartos: number | null
    imovel_garagens: number | null
    imovel_banheiros: number | null
    imovel_imagem: string | null
    imovel_area: number | null
    imovel_contato1: string | null
    imovel_contato2: string | null
  }

  export type ImoveisMaxAggregateOutputType = {
    imovel_id: number | null
    imovel_estado: string | null
    imovel_cidade: string | null
    imovel_bairro: string | null
    imovel_logradouro: string | null
    imovel_numero: string | null
    imovel_complemento: string | null
    imovel_cep: string | null
    imovel_tipo: string | null
    imovel_modalidade: string | null
    imovel_valor: number | null
    imovel_valor_condominio: number | null
    imovel_descricao: string | null
    imovel_quartos: number | null
    imovel_garagens: number | null
    imovel_banheiros: number | null
    imovel_imagem: string | null
    imovel_area: number | null
    imovel_contato1: string | null
    imovel_contato2: string | null
  }

  export type ImoveisCountAggregateOutputType = {
    imovel_id: number
    imovel_estado: number
    imovel_cidade: number
    imovel_bairro: number
    imovel_logradouro: number
    imovel_numero: number
    imovel_complemento: number
    imovel_cep: number
    imovel_tipo: number
    imovel_modalidade: number
    imovel_valor: number
    imovel_valor_condominio: number
    imovel_descricao: number
    imovel_quartos: number
    imovel_garagens: number
    imovel_banheiros: number
    imovel_imagem: number
    imovel_area: number
    imovel_contato1: number
    imovel_contato2: number
    _all: number
  }


  export type ImoveisAvgAggregateInputType = {
    imovel_id?: true
    imovel_valor?: true
    imovel_valor_condominio?: true
    imovel_quartos?: true
    imovel_garagens?: true
    imovel_banheiros?: true
    imovel_area?: true
  }

  export type ImoveisSumAggregateInputType = {
    imovel_id?: true
    imovel_valor?: true
    imovel_valor_condominio?: true
    imovel_quartos?: true
    imovel_garagens?: true
    imovel_banheiros?: true
    imovel_area?: true
  }

  export type ImoveisMinAggregateInputType = {
    imovel_id?: true
    imovel_estado?: true
    imovel_cidade?: true
    imovel_bairro?: true
    imovel_logradouro?: true
    imovel_numero?: true
    imovel_complemento?: true
    imovel_cep?: true
    imovel_tipo?: true
    imovel_modalidade?: true
    imovel_valor?: true
    imovel_valor_condominio?: true
    imovel_descricao?: true
    imovel_quartos?: true
    imovel_garagens?: true
    imovel_banheiros?: true
    imovel_imagem?: true
    imovel_area?: true
    imovel_contato1?: true
    imovel_contato2?: true
  }

  export type ImoveisMaxAggregateInputType = {
    imovel_id?: true
    imovel_estado?: true
    imovel_cidade?: true
    imovel_bairro?: true
    imovel_logradouro?: true
    imovel_numero?: true
    imovel_complemento?: true
    imovel_cep?: true
    imovel_tipo?: true
    imovel_modalidade?: true
    imovel_valor?: true
    imovel_valor_condominio?: true
    imovel_descricao?: true
    imovel_quartos?: true
    imovel_garagens?: true
    imovel_banheiros?: true
    imovel_imagem?: true
    imovel_area?: true
    imovel_contato1?: true
    imovel_contato2?: true
  }

  export type ImoveisCountAggregateInputType = {
    imovel_id?: true
    imovel_estado?: true
    imovel_cidade?: true
    imovel_bairro?: true
    imovel_logradouro?: true
    imovel_numero?: true
    imovel_complemento?: true
    imovel_cep?: true
    imovel_tipo?: true
    imovel_modalidade?: true
    imovel_valor?: true
    imovel_valor_condominio?: true
    imovel_descricao?: true
    imovel_quartos?: true
    imovel_garagens?: true
    imovel_banheiros?: true
    imovel_imagem?: true
    imovel_area?: true
    imovel_contato1?: true
    imovel_contato2?: true
    _all?: true
  }

  export type ImoveisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imoveis to aggregate.
     */
    where?: imoveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imoveis to fetch.
     */
    orderBy?: imoveisOrderByWithRelationInput | imoveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imoveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imoveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imoveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imoveis
    **/
    _count?: true | ImoveisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImoveisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImoveisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImoveisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImoveisMaxAggregateInputType
  }

  export type GetImoveisAggregateType<T extends ImoveisAggregateArgs> = {
        [P in keyof T & keyof AggregateImoveis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImoveis[P]>
      : GetScalarType<T[P], AggregateImoveis[P]>
  }




  export type imoveisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imoveisWhereInput
    orderBy?: imoveisOrderByWithAggregationInput | imoveisOrderByWithAggregationInput[]
    by: ImoveisScalarFieldEnum[] | ImoveisScalarFieldEnum
    having?: imoveisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImoveisCountAggregateInputType | true
    _avg?: ImoveisAvgAggregateInputType
    _sum?: ImoveisSumAggregateInputType
    _min?: ImoveisMinAggregateInputType
    _max?: ImoveisMaxAggregateInputType
  }

  export type ImoveisGroupByOutputType = {
    imovel_id: number
    imovel_estado: string
    imovel_cidade: string
    imovel_bairro: string
    imovel_logradouro: string
    imovel_numero: string
    imovel_complemento: string | null
    imovel_cep: string
    imovel_tipo: string
    imovel_modalidade: string
    imovel_valor: number
    imovel_valor_condominio: number | null
    imovel_descricao: string
    imovel_quartos: number
    imovel_garagens: number
    imovel_banheiros: number
    imovel_imagem: string
    imovel_area: number
    imovel_contato1: string
    imovel_contato2: string | null
    _count: ImoveisCountAggregateOutputType | null
    _avg: ImoveisAvgAggregateOutputType | null
    _sum: ImoveisSumAggregateOutputType | null
    _min: ImoveisMinAggregateOutputType | null
    _max: ImoveisMaxAggregateOutputType | null
  }

  type GetImoveisGroupByPayload<T extends imoveisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImoveisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImoveisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImoveisGroupByOutputType[P]>
            : GetScalarType<T[P], ImoveisGroupByOutputType[P]>
        }
      >
    >


  export type imoveisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imovel_id?: boolean
    imovel_estado?: boolean
    imovel_cidade?: boolean
    imovel_bairro?: boolean
    imovel_logradouro?: boolean
    imovel_numero?: boolean
    imovel_complemento?: boolean
    imovel_cep?: boolean
    imovel_tipo?: boolean
    imovel_modalidade?: boolean
    imovel_valor?: boolean
    imovel_valor_condominio?: boolean
    imovel_descricao?: boolean
    imovel_quartos?: boolean
    imovel_garagens?: boolean
    imovel_banheiros?: boolean
    imovel_imagem?: boolean
    imovel_area?: boolean
    imovel_contato1?: boolean
    imovel_contato2?: boolean
    favoritos?: boolean | imoveis$favoritosArgs<ExtArgs>
    _count?: boolean | ImoveisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imoveis"]>



  export type imoveisSelectScalar = {
    imovel_id?: boolean
    imovel_estado?: boolean
    imovel_cidade?: boolean
    imovel_bairro?: boolean
    imovel_logradouro?: boolean
    imovel_numero?: boolean
    imovel_complemento?: boolean
    imovel_cep?: boolean
    imovel_tipo?: boolean
    imovel_modalidade?: boolean
    imovel_valor?: boolean
    imovel_valor_condominio?: boolean
    imovel_descricao?: boolean
    imovel_quartos?: boolean
    imovel_garagens?: boolean
    imovel_banheiros?: boolean
    imovel_imagem?: boolean
    imovel_area?: boolean
    imovel_contato1?: boolean
    imovel_contato2?: boolean
  }

  export type imoveisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"imovel_id" | "imovel_estado" | "imovel_cidade" | "imovel_bairro" | "imovel_logradouro" | "imovel_numero" | "imovel_complemento" | "imovel_cep" | "imovel_tipo" | "imovel_modalidade" | "imovel_valor" | "imovel_valor_condominio" | "imovel_descricao" | "imovel_quartos" | "imovel_garagens" | "imovel_banheiros" | "imovel_imagem" | "imovel_area" | "imovel_contato1" | "imovel_contato2", ExtArgs["result"]["imoveis"]>
  export type imoveisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | imoveis$favoritosArgs<ExtArgs>
    _count?: boolean | ImoveisCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $imoveisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imoveis"
    objects: {
      favoritos: Prisma.$favoritosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      imovel_id: number
      imovel_estado: string
      imovel_cidade: string
      imovel_bairro: string
      imovel_logradouro: string
      imovel_numero: string
      imovel_complemento: string | null
      imovel_cep: string
      imovel_tipo: string
      imovel_modalidade: string
      imovel_valor: number
      imovel_valor_condominio: number | null
      imovel_descricao: string
      imovel_quartos: number
      imovel_garagens: number
      imovel_banheiros: number
      imovel_imagem: string
      imovel_area: number
      imovel_contato1: string
      imovel_contato2: string | null
    }, ExtArgs["result"]["imoveis"]>
    composites: {}
  }

  type imoveisGetPayload<S extends boolean | null | undefined | imoveisDefaultArgs> = $Result.GetResult<Prisma.$imoveisPayload, S>

  type imoveisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imoveisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImoveisCountAggregateInputType | true
    }

  export interface imoveisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imoveis'], meta: { name: 'imoveis' } }
    /**
     * Find zero or one Imoveis that matches the filter.
     * @param {imoveisFindUniqueArgs} args - Arguments to find a Imoveis
     * @example
     * // Get one Imoveis
     * const imoveis = await prisma.imoveis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imoveisFindUniqueArgs>(args: SelectSubset<T, imoveisFindUniqueArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imoveis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imoveisFindUniqueOrThrowArgs} args - Arguments to find a Imoveis
     * @example
     * // Get one Imoveis
     * const imoveis = await prisma.imoveis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imoveisFindUniqueOrThrowArgs>(args: SelectSubset<T, imoveisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imoveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imoveisFindFirstArgs} args - Arguments to find a Imoveis
     * @example
     * // Get one Imoveis
     * const imoveis = await prisma.imoveis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imoveisFindFirstArgs>(args?: SelectSubset<T, imoveisFindFirstArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imoveis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imoveisFindFirstOrThrowArgs} args - Arguments to find a Imoveis
     * @example
     * // Get one Imoveis
     * const imoveis = await prisma.imoveis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imoveisFindFirstOrThrowArgs>(args?: SelectSubset<T, imoveisFindFirstOrThrowArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imoveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imoveisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imoveis
     * const imoveis = await prisma.imoveis.findMany()
     * 
     * // Get first 10 Imoveis
     * const imoveis = await prisma.imoveis.findMany({ take: 10 })
     * 
     * // Only select the `imovel_id`
     * const imoveisWithImovel_idOnly = await prisma.imoveis.findMany({ select: { imovel_id: true } })
     * 
     */
    findMany<T extends imoveisFindManyArgs>(args?: SelectSubset<T, imoveisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imoveis.
     * @param {imoveisCreateArgs} args - Arguments to create a Imoveis.
     * @example
     * // Create one Imoveis
     * const Imoveis = await prisma.imoveis.create({
     *   data: {
     *     // ... data to create a Imoveis
     *   }
     * })
     * 
     */
    create<T extends imoveisCreateArgs>(args: SelectSubset<T, imoveisCreateArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imoveis.
     * @param {imoveisCreateManyArgs} args - Arguments to create many Imoveis.
     * @example
     * // Create many Imoveis
     * const imoveis = await prisma.imoveis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imoveisCreateManyArgs>(args?: SelectSubset<T, imoveisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Imoveis.
     * @param {imoveisDeleteArgs} args - Arguments to delete one Imoveis.
     * @example
     * // Delete one Imoveis
     * const Imoveis = await prisma.imoveis.delete({
     *   where: {
     *     // ... filter to delete one Imoveis
     *   }
     * })
     * 
     */
    delete<T extends imoveisDeleteArgs>(args: SelectSubset<T, imoveisDeleteArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imoveis.
     * @param {imoveisUpdateArgs} args - Arguments to update one Imoveis.
     * @example
     * // Update one Imoveis
     * const imoveis = await prisma.imoveis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imoveisUpdateArgs>(args: SelectSubset<T, imoveisUpdateArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imoveis.
     * @param {imoveisDeleteManyArgs} args - Arguments to filter Imoveis to delete.
     * @example
     * // Delete a few Imoveis
     * const { count } = await prisma.imoveis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imoveisDeleteManyArgs>(args?: SelectSubset<T, imoveisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imoveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imoveisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imoveis
     * const imoveis = await prisma.imoveis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imoveisUpdateManyArgs>(args: SelectSubset<T, imoveisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imoveis.
     * @param {imoveisUpsertArgs} args - Arguments to update or create a Imoveis.
     * @example
     * // Update or create a Imoveis
     * const imoveis = await prisma.imoveis.upsert({
     *   create: {
     *     // ... data to create a Imoveis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imoveis we want to update
     *   }
     * })
     */
    upsert<T extends imoveisUpsertArgs>(args: SelectSubset<T, imoveisUpsertArgs<ExtArgs>>): Prisma__imoveisClient<$Result.GetResult<Prisma.$imoveisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imoveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imoveisCountArgs} args - Arguments to filter Imoveis to count.
     * @example
     * // Count the number of Imoveis
     * const count = await prisma.imoveis.count({
     *   where: {
     *     // ... the filter for the Imoveis we want to count
     *   }
     * })
    **/
    count<T extends imoveisCountArgs>(
      args?: Subset<T, imoveisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImoveisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imoveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImoveisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImoveisAggregateArgs>(args: Subset<T, ImoveisAggregateArgs>): Prisma.PrismaPromise<GetImoveisAggregateType<T>>

    /**
     * Group by Imoveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imoveisGroupByArgs} args - Group by arguments.
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
      T extends imoveisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imoveisGroupByArgs['orderBy'] }
        : { orderBy?: imoveisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, imoveisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImoveisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imoveis model
   */
  readonly fields: imoveisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imoveis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imoveisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoritos<T extends imoveis$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, imoveis$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the imoveis model
   */
  interface imoveisFieldRefs {
    readonly imovel_id: FieldRef<"imoveis", 'Int'>
    readonly imovel_estado: FieldRef<"imoveis", 'String'>
    readonly imovel_cidade: FieldRef<"imoveis", 'String'>
    readonly imovel_bairro: FieldRef<"imoveis", 'String'>
    readonly imovel_logradouro: FieldRef<"imoveis", 'String'>
    readonly imovel_numero: FieldRef<"imoveis", 'String'>
    readonly imovel_complemento: FieldRef<"imoveis", 'String'>
    readonly imovel_cep: FieldRef<"imoveis", 'String'>
    readonly imovel_tipo: FieldRef<"imoveis", 'String'>
    readonly imovel_modalidade: FieldRef<"imoveis", 'String'>
    readonly imovel_valor: FieldRef<"imoveis", 'Float'>
    readonly imovel_valor_condominio: FieldRef<"imoveis", 'Float'>
    readonly imovel_descricao: FieldRef<"imoveis", 'String'>
    readonly imovel_quartos: FieldRef<"imoveis", 'Int'>
    readonly imovel_garagens: FieldRef<"imoveis", 'Int'>
    readonly imovel_banheiros: FieldRef<"imoveis", 'Int'>
    readonly imovel_imagem: FieldRef<"imoveis", 'String'>
    readonly imovel_area: FieldRef<"imoveis", 'Int'>
    readonly imovel_contato1: FieldRef<"imoveis", 'String'>
    readonly imovel_contato2: FieldRef<"imoveis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * imoveis findUnique
   */
  export type imoveisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * Filter, which imoveis to fetch.
     */
    where: imoveisWhereUniqueInput
  }

  /**
   * imoveis findUniqueOrThrow
   */
  export type imoveisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * Filter, which imoveis to fetch.
     */
    where: imoveisWhereUniqueInput
  }

  /**
   * imoveis findFirst
   */
  export type imoveisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * Filter, which imoveis to fetch.
     */
    where?: imoveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imoveis to fetch.
     */
    orderBy?: imoveisOrderByWithRelationInput | imoveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imoveis.
     */
    cursor?: imoveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imoveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imoveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imoveis.
     */
    distinct?: ImoveisScalarFieldEnum | ImoveisScalarFieldEnum[]
  }

  /**
   * imoveis findFirstOrThrow
   */
  export type imoveisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * Filter, which imoveis to fetch.
     */
    where?: imoveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imoveis to fetch.
     */
    orderBy?: imoveisOrderByWithRelationInput | imoveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imoveis.
     */
    cursor?: imoveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imoveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imoveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imoveis.
     */
    distinct?: ImoveisScalarFieldEnum | ImoveisScalarFieldEnum[]
  }

  /**
   * imoveis findMany
   */
  export type imoveisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * Filter, which imoveis to fetch.
     */
    where?: imoveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imoveis to fetch.
     */
    orderBy?: imoveisOrderByWithRelationInput | imoveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imoveis.
     */
    cursor?: imoveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imoveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imoveis.
     */
    skip?: number
    distinct?: ImoveisScalarFieldEnum | ImoveisScalarFieldEnum[]
  }

  /**
   * imoveis create
   */
  export type imoveisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * The data needed to create a imoveis.
     */
    data: XOR<imoveisCreateInput, imoveisUncheckedCreateInput>
  }

  /**
   * imoveis createMany
   */
  export type imoveisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imoveis.
     */
    data: imoveisCreateManyInput | imoveisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imoveis update
   */
  export type imoveisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * The data needed to update a imoveis.
     */
    data: XOR<imoveisUpdateInput, imoveisUncheckedUpdateInput>
    /**
     * Choose, which imoveis to update.
     */
    where: imoveisWhereUniqueInput
  }

  /**
   * imoveis updateMany
   */
  export type imoveisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imoveis.
     */
    data: XOR<imoveisUpdateManyMutationInput, imoveisUncheckedUpdateManyInput>
    /**
     * Filter which imoveis to update
     */
    where?: imoveisWhereInput
    /**
     * Limit how many imoveis to update.
     */
    limit?: number
  }

  /**
   * imoveis upsert
   */
  export type imoveisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * The filter to search for the imoveis to update in case it exists.
     */
    where: imoveisWhereUniqueInput
    /**
     * In case the imoveis found by the `where` argument doesn't exist, create a new imoveis with this data.
     */
    create: XOR<imoveisCreateInput, imoveisUncheckedCreateInput>
    /**
     * In case the imoveis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imoveisUpdateInput, imoveisUncheckedUpdateInput>
  }

  /**
   * imoveis delete
   */
  export type imoveisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
    /**
     * Filter which imoveis to delete.
     */
    where: imoveisWhereUniqueInput
  }

  /**
   * imoveis deleteMany
   */
  export type imoveisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imoveis to delete
     */
    where?: imoveisWhereInput
    /**
     * Limit how many imoveis to delete.
     */
    limit?: number
  }

  /**
   * imoveis.favoritos
   */
  export type imoveis$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    where?: favoritosWhereInput
    orderBy?: favoritosOrderByWithRelationInput | favoritosOrderByWithRelationInput[]
    cursor?: favoritosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * imoveis without action
   */
  export type imoveisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imoveis
     */
    select?: imoveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imoveis
     */
    omit?: imoveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imoveisInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    usuario_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    usuario_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    usuario_id: number | null
    usuario_nome: string | null
    usuario_email: string | null
    usuario_telefone: string | null
    usuario_senha: string | null
    usuario_cpf: string | null
    usuario_nivel: string | null
    usuario_nascimento: string | null
    usuario_imagem: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    usuario_id: number | null
    usuario_nome: string | null
    usuario_email: string | null
    usuario_telefone: string | null
    usuario_senha: string | null
    usuario_cpf: string | null
    usuario_nivel: string | null
    usuario_nascimento: string | null
    usuario_imagem: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    usuario_id: number
    usuario_nome: number
    usuario_email: number
    usuario_telefone: number
    usuario_senha: number
    usuario_cpf: number
    usuario_nivel: number
    usuario_nascimento: number
    usuario_imagem: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    usuario_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    usuario_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    usuario_id?: true
    usuario_nome?: true
    usuario_email?: true
    usuario_telefone?: true
    usuario_senha?: true
    usuario_cpf?: true
    usuario_nivel?: true
    usuario_nascimento?: true
    usuario_imagem?: true
  }

  export type UsuariosMaxAggregateInputType = {
    usuario_id?: true
    usuario_nome?: true
    usuario_email?: true
    usuario_telefone?: true
    usuario_senha?: true
    usuario_cpf?: true
    usuario_nivel?: true
    usuario_nascimento?: true
    usuario_imagem?: true
  }

  export type UsuariosCountAggregateInputType = {
    usuario_id?: true
    usuario_nome?: true
    usuario_email?: true
    usuario_telefone?: true
    usuario_senha?: true
    usuario_cpf?: true
    usuario_nivel?: true
    usuario_nascimento?: true
    usuario_imagem?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    usuario_id: number
    usuario_nome: string
    usuario_email: string
    usuario_telefone: string
    usuario_senha: string
    usuario_cpf: string | null
    usuario_nivel: string
    usuario_nascimento: string
    usuario_imagem: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    usuario_nome?: boolean
    usuario_email?: boolean
    usuario_telefone?: boolean
    usuario_senha?: boolean
    usuario_cpf?: boolean
    usuario_nivel?: boolean
    usuario_nascimento?: boolean
    usuario_imagem?: boolean
    favoritos?: boolean | usuarios$favoritosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    usuario_id?: boolean
    usuario_nome?: boolean
    usuario_email?: boolean
    usuario_telefone?: boolean
    usuario_senha?: boolean
    usuario_cpf?: boolean
    usuario_nivel?: boolean
    usuario_nascimento?: boolean
    usuario_imagem?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuario_id" | "usuario_nome" | "usuario_email" | "usuario_telefone" | "usuario_senha" | "usuario_cpf" | "usuario_nivel" | "usuario_nascimento" | "usuario_imagem", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoritos?: boolean | usuarios$favoritosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      favoritos: Prisma.$favoritosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: number
      usuario_nome: string
      usuario_email: string
      usuario_telefone: string
      usuario_senha: string
      usuario_cpf: string | null
      usuario_nivel: string
      usuario_nascimento: string
      usuario_imagem: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const usuariosWithUsuario_idOnly = await prisma.usuarios.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoritos<T extends usuarios$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly usuario_id: FieldRef<"usuarios", 'Int'>
    readonly usuario_nome: FieldRef<"usuarios", 'String'>
    readonly usuario_email: FieldRef<"usuarios", 'String'>
    readonly usuario_telefone: FieldRef<"usuarios", 'String'>
    readonly usuario_senha: FieldRef<"usuarios", 'String'>
    readonly usuario_cpf: FieldRef<"usuarios", 'String'>
    readonly usuario_nivel: FieldRef<"usuarios", 'String'>
    readonly usuario_nascimento: FieldRef<"usuarios", 'String'>
    readonly usuario_imagem: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.favoritos
   */
  export type usuarios$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoritos
     */
    select?: favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoritos
     */
    omit?: favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritosInclude<ExtArgs> | null
    where?: favoritosWhereInput
    orderBy?: favoritosOrderByWithRelationInput | favoritosOrderByWithRelationInput[]
    cursor?: favoritosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritosScalarFieldEnum | FavoritosScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FavoritosScalarFieldEnum: {
    favorito_id: 'favorito_id',
    usuario_id: 'usuario_id',
    imovel_id: 'imovel_id'
  };

  export type FavoritosScalarFieldEnum = (typeof FavoritosScalarFieldEnum)[keyof typeof FavoritosScalarFieldEnum]


  export const ImoveisScalarFieldEnum: {
    imovel_id: 'imovel_id',
    imovel_estado: 'imovel_estado',
    imovel_cidade: 'imovel_cidade',
    imovel_bairro: 'imovel_bairro',
    imovel_logradouro: 'imovel_logradouro',
    imovel_numero: 'imovel_numero',
    imovel_complemento: 'imovel_complemento',
    imovel_cep: 'imovel_cep',
    imovel_tipo: 'imovel_tipo',
    imovel_modalidade: 'imovel_modalidade',
    imovel_valor: 'imovel_valor',
    imovel_valor_condominio: 'imovel_valor_condominio',
    imovel_descricao: 'imovel_descricao',
    imovel_quartos: 'imovel_quartos',
    imovel_garagens: 'imovel_garagens',
    imovel_banheiros: 'imovel_banheiros',
    imovel_imagem: 'imovel_imagem',
    imovel_area: 'imovel_area',
    imovel_contato1: 'imovel_contato1',
    imovel_contato2: 'imovel_contato2'
  };

  export type ImoveisScalarFieldEnum = (typeof ImoveisScalarFieldEnum)[keyof typeof ImoveisScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    usuario_id: 'usuario_id',
    usuario_nome: 'usuario_nome',
    usuario_email: 'usuario_email',
    usuario_telefone: 'usuario_telefone',
    usuario_senha: 'usuario_senha',
    usuario_cpf: 'usuario_cpf',
    usuario_nivel: 'usuario_nivel',
    usuario_nascimento: 'usuario_nascimento',
    usuario_imagem: 'usuario_imagem'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


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


  export const imoveisOrderByRelevanceFieldEnum: {
    imovel_estado: 'imovel_estado',
    imovel_cidade: 'imovel_cidade',
    imovel_bairro: 'imovel_bairro',
    imovel_logradouro: 'imovel_logradouro',
    imovel_numero: 'imovel_numero',
    imovel_complemento: 'imovel_complemento',
    imovel_cep: 'imovel_cep',
    imovel_tipo: 'imovel_tipo',
    imovel_modalidade: 'imovel_modalidade',
    imovel_descricao: 'imovel_descricao',
    imovel_imagem: 'imovel_imagem',
    imovel_contato1: 'imovel_contato1',
    imovel_contato2: 'imovel_contato2'
  };

  export type imoveisOrderByRelevanceFieldEnum = (typeof imoveisOrderByRelevanceFieldEnum)[keyof typeof imoveisOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    usuario_nome: 'usuario_nome',
    usuario_email: 'usuario_email',
    usuario_telefone: 'usuario_telefone',
    usuario_senha: 'usuario_senha',
    usuario_cpf: 'usuario_cpf',
    usuario_nivel: 'usuario_nivel',
    usuario_nascimento: 'usuario_nascimento',
    usuario_imagem: 'usuario_imagem'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


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
   * Deep Input Types
   */


  export type favoritosWhereInput = {
    AND?: favoritosWhereInput | favoritosWhereInput[]
    OR?: favoritosWhereInput[]
    NOT?: favoritosWhereInput | favoritosWhereInput[]
    favorito_id?: IntFilter<"favoritos"> | number
    usuario_id?: IntFilter<"favoritos"> | number
    imovel_id?: IntFilter<"favoritos"> | number
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    imoveis?: XOR<ImoveisScalarRelationFilter, imoveisWhereInput>
  }

  export type favoritosOrderByWithRelationInput = {
    favorito_id?: SortOrder
    usuario_id?: SortOrder
    imovel_id?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    imoveis?: imoveisOrderByWithRelationInput
  }

  export type favoritosWhereUniqueInput = Prisma.AtLeast<{
    favorito_id?: number
    AND?: favoritosWhereInput | favoritosWhereInput[]
    OR?: favoritosWhereInput[]
    NOT?: favoritosWhereInput | favoritosWhereInput[]
    usuario_id?: IntFilter<"favoritos"> | number
    imovel_id?: IntFilter<"favoritos"> | number
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    imoveis?: XOR<ImoveisScalarRelationFilter, imoveisWhereInput>
  }, "favorito_id" | "favorito_id">

  export type favoritosOrderByWithAggregationInput = {
    favorito_id?: SortOrder
    usuario_id?: SortOrder
    imovel_id?: SortOrder
    _count?: favoritosCountOrderByAggregateInput
    _avg?: favoritosAvgOrderByAggregateInput
    _max?: favoritosMaxOrderByAggregateInput
    _min?: favoritosMinOrderByAggregateInput
    _sum?: favoritosSumOrderByAggregateInput
  }

  export type favoritosScalarWhereWithAggregatesInput = {
    AND?: favoritosScalarWhereWithAggregatesInput | favoritosScalarWhereWithAggregatesInput[]
    OR?: favoritosScalarWhereWithAggregatesInput[]
    NOT?: favoritosScalarWhereWithAggregatesInput | favoritosScalarWhereWithAggregatesInput[]
    favorito_id?: IntWithAggregatesFilter<"favoritos"> | number
    usuario_id?: IntWithAggregatesFilter<"favoritos"> | number
    imovel_id?: IntWithAggregatesFilter<"favoritos"> | number
  }

  export type imoveisWhereInput = {
    AND?: imoveisWhereInput | imoveisWhereInput[]
    OR?: imoveisWhereInput[]
    NOT?: imoveisWhereInput | imoveisWhereInput[]
    imovel_id?: IntFilter<"imoveis"> | number
    imovel_estado?: StringFilter<"imoveis"> | string
    imovel_cidade?: StringFilter<"imoveis"> | string
    imovel_bairro?: StringFilter<"imoveis"> | string
    imovel_logradouro?: StringFilter<"imoveis"> | string
    imovel_numero?: StringFilter<"imoveis"> | string
    imovel_complemento?: StringNullableFilter<"imoveis"> | string | null
    imovel_cep?: StringFilter<"imoveis"> | string
    imovel_tipo?: StringFilter<"imoveis"> | string
    imovel_modalidade?: StringFilter<"imoveis"> | string
    imovel_valor?: FloatFilter<"imoveis"> | number
    imovel_valor_condominio?: FloatNullableFilter<"imoveis"> | number | null
    imovel_descricao?: StringFilter<"imoveis"> | string
    imovel_quartos?: IntFilter<"imoveis"> | number
    imovel_garagens?: IntFilter<"imoveis"> | number
    imovel_banheiros?: IntFilter<"imoveis"> | number
    imovel_imagem?: StringFilter<"imoveis"> | string
    imovel_area?: IntFilter<"imoveis"> | number
    imovel_contato1?: StringFilter<"imoveis"> | string
    imovel_contato2?: StringNullableFilter<"imoveis"> | string | null
    favoritos?: FavoritosListRelationFilter
  }

  export type imoveisOrderByWithRelationInput = {
    imovel_id?: SortOrder
    imovel_estado?: SortOrder
    imovel_cidade?: SortOrder
    imovel_bairro?: SortOrder
    imovel_logradouro?: SortOrder
    imovel_numero?: SortOrder
    imovel_complemento?: SortOrderInput | SortOrder
    imovel_cep?: SortOrder
    imovel_tipo?: SortOrder
    imovel_modalidade?: SortOrder
    imovel_valor?: SortOrder
    imovel_valor_condominio?: SortOrderInput | SortOrder
    imovel_descricao?: SortOrder
    imovel_quartos?: SortOrder
    imovel_garagens?: SortOrder
    imovel_banheiros?: SortOrder
    imovel_imagem?: SortOrder
    imovel_area?: SortOrder
    imovel_contato1?: SortOrder
    imovel_contato2?: SortOrderInput | SortOrder
    favoritos?: favoritosOrderByRelationAggregateInput
    _relevance?: imoveisOrderByRelevanceInput
  }

  export type imoveisWhereUniqueInput = Prisma.AtLeast<{
    imovel_id?: number
    AND?: imoveisWhereInput | imoveisWhereInput[]
    OR?: imoveisWhereInput[]
    NOT?: imoveisWhereInput | imoveisWhereInput[]
    imovel_estado?: StringFilter<"imoveis"> | string
    imovel_cidade?: StringFilter<"imoveis"> | string
    imovel_bairro?: StringFilter<"imoveis"> | string
    imovel_logradouro?: StringFilter<"imoveis"> | string
    imovel_numero?: StringFilter<"imoveis"> | string
    imovel_complemento?: StringNullableFilter<"imoveis"> | string | null
    imovel_cep?: StringFilter<"imoveis"> | string
    imovel_tipo?: StringFilter<"imoveis"> | string
    imovel_modalidade?: StringFilter<"imoveis"> | string
    imovel_valor?: FloatFilter<"imoveis"> | number
    imovel_valor_condominio?: FloatNullableFilter<"imoveis"> | number | null
    imovel_descricao?: StringFilter<"imoveis"> | string
    imovel_quartos?: IntFilter<"imoveis"> | number
    imovel_garagens?: IntFilter<"imoveis"> | number
    imovel_banheiros?: IntFilter<"imoveis"> | number
    imovel_imagem?: StringFilter<"imoveis"> | string
    imovel_area?: IntFilter<"imoveis"> | number
    imovel_contato1?: StringFilter<"imoveis"> | string
    imovel_contato2?: StringNullableFilter<"imoveis"> | string | null
    favoritos?: FavoritosListRelationFilter
  }, "imovel_id" | "imovel_id">

  export type imoveisOrderByWithAggregationInput = {
    imovel_id?: SortOrder
    imovel_estado?: SortOrder
    imovel_cidade?: SortOrder
    imovel_bairro?: SortOrder
    imovel_logradouro?: SortOrder
    imovel_numero?: SortOrder
    imovel_complemento?: SortOrderInput | SortOrder
    imovel_cep?: SortOrder
    imovel_tipo?: SortOrder
    imovel_modalidade?: SortOrder
    imovel_valor?: SortOrder
    imovel_valor_condominio?: SortOrderInput | SortOrder
    imovel_descricao?: SortOrder
    imovel_quartos?: SortOrder
    imovel_garagens?: SortOrder
    imovel_banheiros?: SortOrder
    imovel_imagem?: SortOrder
    imovel_area?: SortOrder
    imovel_contato1?: SortOrder
    imovel_contato2?: SortOrderInput | SortOrder
    _count?: imoveisCountOrderByAggregateInput
    _avg?: imoveisAvgOrderByAggregateInput
    _max?: imoveisMaxOrderByAggregateInput
    _min?: imoveisMinOrderByAggregateInput
    _sum?: imoveisSumOrderByAggregateInput
  }

  export type imoveisScalarWhereWithAggregatesInput = {
    AND?: imoveisScalarWhereWithAggregatesInput | imoveisScalarWhereWithAggregatesInput[]
    OR?: imoveisScalarWhereWithAggregatesInput[]
    NOT?: imoveisScalarWhereWithAggregatesInput | imoveisScalarWhereWithAggregatesInput[]
    imovel_id?: IntWithAggregatesFilter<"imoveis"> | number
    imovel_estado?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_cidade?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_bairro?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_logradouro?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_numero?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_complemento?: StringNullableWithAggregatesFilter<"imoveis"> | string | null
    imovel_cep?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_tipo?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_modalidade?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_valor?: FloatWithAggregatesFilter<"imoveis"> | number
    imovel_valor_condominio?: FloatNullableWithAggregatesFilter<"imoveis"> | number | null
    imovel_descricao?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_quartos?: IntWithAggregatesFilter<"imoveis"> | number
    imovel_garagens?: IntWithAggregatesFilter<"imoveis"> | number
    imovel_banheiros?: IntWithAggregatesFilter<"imoveis"> | number
    imovel_imagem?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_area?: IntWithAggregatesFilter<"imoveis"> | number
    imovel_contato1?: StringWithAggregatesFilter<"imoveis"> | string
    imovel_contato2?: StringNullableWithAggregatesFilter<"imoveis"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    usuario_id?: IntFilter<"usuarios"> | number
    usuario_nome?: StringFilter<"usuarios"> | string
    usuario_email?: StringFilter<"usuarios"> | string
    usuario_telefone?: StringFilter<"usuarios"> | string
    usuario_senha?: StringFilter<"usuarios"> | string
    usuario_cpf?: StringNullableFilter<"usuarios"> | string | null
    usuario_nivel?: StringFilter<"usuarios"> | string
    usuario_nascimento?: StringFilter<"usuarios"> | string
    usuario_imagem?: StringFilter<"usuarios"> | string
    favoritos?: FavoritosListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    usuario_email?: SortOrder
    usuario_telefone?: SortOrder
    usuario_senha?: SortOrder
    usuario_cpf?: SortOrderInput | SortOrder
    usuario_nivel?: SortOrder
    usuario_nascimento?: SortOrder
    usuario_imagem?: SortOrder
    favoritos?: favoritosOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    usuario_nome?: StringFilter<"usuarios"> | string
    usuario_email?: StringFilter<"usuarios"> | string
    usuario_telefone?: StringFilter<"usuarios"> | string
    usuario_senha?: StringFilter<"usuarios"> | string
    usuario_cpf?: StringNullableFilter<"usuarios"> | string | null
    usuario_nivel?: StringFilter<"usuarios"> | string
    usuario_nascimento?: StringFilter<"usuarios"> | string
    usuario_imagem?: StringFilter<"usuarios"> | string
    favoritos?: FavoritosListRelationFilter
  }, "usuario_id" | "usuario_id">

  export type usuariosOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    usuario_email?: SortOrder
    usuario_telefone?: SortOrder
    usuario_senha?: SortOrder
    usuario_cpf?: SortOrderInput | SortOrder
    usuario_nivel?: SortOrder
    usuario_nascimento?: SortOrder
    usuario_imagem?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    usuario_id?: IntWithAggregatesFilter<"usuarios"> | number
    usuario_nome?: StringWithAggregatesFilter<"usuarios"> | string
    usuario_email?: StringWithAggregatesFilter<"usuarios"> | string
    usuario_telefone?: StringWithAggregatesFilter<"usuarios"> | string
    usuario_senha?: StringWithAggregatesFilter<"usuarios"> | string
    usuario_cpf?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    usuario_nivel?: StringWithAggregatesFilter<"usuarios"> | string
    usuario_nascimento?: StringWithAggregatesFilter<"usuarios"> | string
    usuario_imagem?: StringWithAggregatesFilter<"usuarios"> | string
  }

  export type favoritosCreateInput = {
    usuarios: usuariosCreateNestedOneWithoutFavoritosInput
    imoveis: imoveisCreateNestedOneWithoutFavoritosInput
  }

  export type favoritosUncheckedCreateInput = {
    favorito_id?: number
    usuario_id: number
    imovel_id: number
  }

  export type favoritosUpdateInput = {
    usuarios?: usuariosUpdateOneRequiredWithoutFavoritosNestedInput
    imoveis?: imoveisUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type favoritosUncheckedUpdateInput = {
    favorito_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    imovel_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritosCreateManyInput = {
    favorito_id?: number
    usuario_id: number
    imovel_id: number
  }

  export type favoritosUpdateManyMutationInput = {

  }

  export type favoritosUncheckedUpdateManyInput = {
    favorito_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    imovel_id?: IntFieldUpdateOperationsInput | number
  }

  export type imoveisCreateInput = {
    imovel_estado: string
    imovel_cidade: string
    imovel_bairro: string
    imovel_logradouro: string
    imovel_numero: string
    imovel_complemento?: string | null
    imovel_cep: string
    imovel_tipo: string
    imovel_modalidade: string
    imovel_valor: number
    imovel_valor_condominio?: number | null
    imovel_descricao: string
    imovel_quartos: number
    imovel_garagens: number
    imovel_banheiros: number
    imovel_imagem: string
    imovel_area: number
    imovel_contato1: string
    imovel_contato2?: string | null
    favoritos?: favoritosCreateNestedManyWithoutImoveisInput
  }

  export type imoveisUncheckedCreateInput = {
    imovel_id?: number
    imovel_estado: string
    imovel_cidade: string
    imovel_bairro: string
    imovel_logradouro: string
    imovel_numero: string
    imovel_complemento?: string | null
    imovel_cep: string
    imovel_tipo: string
    imovel_modalidade: string
    imovel_valor: number
    imovel_valor_condominio?: number | null
    imovel_descricao: string
    imovel_quartos: number
    imovel_garagens: number
    imovel_banheiros: number
    imovel_imagem: string
    imovel_area: number
    imovel_contato1: string
    imovel_contato2?: string | null
    favoritos?: favoritosUncheckedCreateNestedManyWithoutImoveisInput
  }

  export type imoveisUpdateInput = {
    imovel_estado?: StringFieldUpdateOperationsInput | string
    imovel_cidade?: StringFieldUpdateOperationsInput | string
    imovel_bairro?: StringFieldUpdateOperationsInput | string
    imovel_logradouro?: StringFieldUpdateOperationsInput | string
    imovel_numero?: StringFieldUpdateOperationsInput | string
    imovel_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    imovel_cep?: StringFieldUpdateOperationsInput | string
    imovel_tipo?: StringFieldUpdateOperationsInput | string
    imovel_modalidade?: StringFieldUpdateOperationsInput | string
    imovel_valor?: FloatFieldUpdateOperationsInput | number
    imovel_valor_condominio?: NullableFloatFieldUpdateOperationsInput | number | null
    imovel_descricao?: StringFieldUpdateOperationsInput | string
    imovel_quartos?: IntFieldUpdateOperationsInput | number
    imovel_garagens?: IntFieldUpdateOperationsInput | number
    imovel_banheiros?: IntFieldUpdateOperationsInput | number
    imovel_imagem?: StringFieldUpdateOperationsInput | string
    imovel_area?: IntFieldUpdateOperationsInput | number
    imovel_contato1?: StringFieldUpdateOperationsInput | string
    imovel_contato2?: NullableStringFieldUpdateOperationsInput | string | null
    favoritos?: favoritosUpdateManyWithoutImoveisNestedInput
  }

  export type imoveisUncheckedUpdateInput = {
    imovel_id?: IntFieldUpdateOperationsInput | number
    imovel_estado?: StringFieldUpdateOperationsInput | string
    imovel_cidade?: StringFieldUpdateOperationsInput | string
    imovel_bairro?: StringFieldUpdateOperationsInput | string
    imovel_logradouro?: StringFieldUpdateOperationsInput | string
    imovel_numero?: StringFieldUpdateOperationsInput | string
    imovel_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    imovel_cep?: StringFieldUpdateOperationsInput | string
    imovel_tipo?: StringFieldUpdateOperationsInput | string
    imovel_modalidade?: StringFieldUpdateOperationsInput | string
    imovel_valor?: FloatFieldUpdateOperationsInput | number
    imovel_valor_condominio?: NullableFloatFieldUpdateOperationsInput | number | null
    imovel_descricao?: StringFieldUpdateOperationsInput | string
    imovel_quartos?: IntFieldUpdateOperationsInput | number
    imovel_garagens?: IntFieldUpdateOperationsInput | number
    imovel_banheiros?: IntFieldUpdateOperationsInput | number
    imovel_imagem?: StringFieldUpdateOperationsInput | string
    imovel_area?: IntFieldUpdateOperationsInput | number
    imovel_contato1?: StringFieldUpdateOperationsInput | string
    imovel_contato2?: NullableStringFieldUpdateOperationsInput | string | null
    favoritos?: favoritosUncheckedUpdateManyWithoutImoveisNestedInput
  }

  export type imoveisCreateManyInput = {
    imovel_id?: number
    imovel_estado: string
    imovel_cidade: string
    imovel_bairro: string
    imovel_logradouro: string
    imovel_numero: string
    imovel_complemento?: string | null
    imovel_cep: string
    imovel_tipo: string
    imovel_modalidade: string
    imovel_valor: number
    imovel_valor_condominio?: number | null
    imovel_descricao: string
    imovel_quartos: number
    imovel_garagens: number
    imovel_banheiros: number
    imovel_imagem: string
    imovel_area: number
    imovel_contato1: string
    imovel_contato2?: string | null
  }

  export type imoveisUpdateManyMutationInput = {
    imovel_estado?: StringFieldUpdateOperationsInput | string
    imovel_cidade?: StringFieldUpdateOperationsInput | string
    imovel_bairro?: StringFieldUpdateOperationsInput | string
    imovel_logradouro?: StringFieldUpdateOperationsInput | string
    imovel_numero?: StringFieldUpdateOperationsInput | string
    imovel_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    imovel_cep?: StringFieldUpdateOperationsInput | string
    imovel_tipo?: StringFieldUpdateOperationsInput | string
    imovel_modalidade?: StringFieldUpdateOperationsInput | string
    imovel_valor?: FloatFieldUpdateOperationsInput | number
    imovel_valor_condominio?: NullableFloatFieldUpdateOperationsInput | number | null
    imovel_descricao?: StringFieldUpdateOperationsInput | string
    imovel_quartos?: IntFieldUpdateOperationsInput | number
    imovel_garagens?: IntFieldUpdateOperationsInput | number
    imovel_banheiros?: IntFieldUpdateOperationsInput | number
    imovel_imagem?: StringFieldUpdateOperationsInput | string
    imovel_area?: IntFieldUpdateOperationsInput | number
    imovel_contato1?: StringFieldUpdateOperationsInput | string
    imovel_contato2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imoveisUncheckedUpdateManyInput = {
    imovel_id?: IntFieldUpdateOperationsInput | number
    imovel_estado?: StringFieldUpdateOperationsInput | string
    imovel_cidade?: StringFieldUpdateOperationsInput | string
    imovel_bairro?: StringFieldUpdateOperationsInput | string
    imovel_logradouro?: StringFieldUpdateOperationsInput | string
    imovel_numero?: StringFieldUpdateOperationsInput | string
    imovel_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    imovel_cep?: StringFieldUpdateOperationsInput | string
    imovel_tipo?: StringFieldUpdateOperationsInput | string
    imovel_modalidade?: StringFieldUpdateOperationsInput | string
    imovel_valor?: FloatFieldUpdateOperationsInput | number
    imovel_valor_condominio?: NullableFloatFieldUpdateOperationsInput | number | null
    imovel_descricao?: StringFieldUpdateOperationsInput | string
    imovel_quartos?: IntFieldUpdateOperationsInput | number
    imovel_garagens?: IntFieldUpdateOperationsInput | number
    imovel_banheiros?: IntFieldUpdateOperationsInput | number
    imovel_imagem?: StringFieldUpdateOperationsInput | string
    imovel_area?: IntFieldUpdateOperationsInput | number
    imovel_contato1?: StringFieldUpdateOperationsInput | string
    imovel_contato2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    usuario_nome: string
    usuario_email: string
    usuario_telefone: string
    usuario_senha: string
    usuario_cpf?: string | null
    usuario_nivel?: string
    usuario_nascimento: string
    usuario_imagem: string
    favoritos?: favoritosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    usuario_id?: number
    usuario_nome: string
    usuario_email: string
    usuario_telefone: string
    usuario_senha: string
    usuario_cpf?: string | null
    usuario_nivel?: string
    usuario_nascimento: string
    usuario_imagem: string
    favoritos?: favoritosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    usuario_nome?: StringFieldUpdateOperationsInput | string
    usuario_email?: StringFieldUpdateOperationsInput | string
    usuario_telefone?: StringFieldUpdateOperationsInput | string
    usuario_senha?: StringFieldUpdateOperationsInput | string
    usuario_cpf?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nivel?: StringFieldUpdateOperationsInput | string
    usuario_nascimento?: StringFieldUpdateOperationsInput | string
    usuario_imagem?: StringFieldUpdateOperationsInput | string
    favoritos?: favoritosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    usuario_nome?: StringFieldUpdateOperationsInput | string
    usuario_email?: StringFieldUpdateOperationsInput | string
    usuario_telefone?: StringFieldUpdateOperationsInput | string
    usuario_senha?: StringFieldUpdateOperationsInput | string
    usuario_cpf?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nivel?: StringFieldUpdateOperationsInput | string
    usuario_nascimento?: StringFieldUpdateOperationsInput | string
    usuario_imagem?: StringFieldUpdateOperationsInput | string
    favoritos?: favoritosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    usuario_id?: number
    usuario_nome: string
    usuario_email: string
    usuario_telefone: string
    usuario_senha: string
    usuario_cpf?: string | null
    usuario_nivel?: string
    usuario_nascimento: string
    usuario_imagem: string
  }

  export type usuariosUpdateManyMutationInput = {
    usuario_nome?: StringFieldUpdateOperationsInput | string
    usuario_email?: StringFieldUpdateOperationsInput | string
    usuario_telefone?: StringFieldUpdateOperationsInput | string
    usuario_senha?: StringFieldUpdateOperationsInput | string
    usuario_cpf?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nivel?: StringFieldUpdateOperationsInput | string
    usuario_nascimento?: StringFieldUpdateOperationsInput | string
    usuario_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    usuario_nome?: StringFieldUpdateOperationsInput | string
    usuario_email?: StringFieldUpdateOperationsInput | string
    usuario_telefone?: StringFieldUpdateOperationsInput | string
    usuario_senha?: StringFieldUpdateOperationsInput | string
    usuario_cpf?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nivel?: StringFieldUpdateOperationsInput | string
    usuario_nascimento?: StringFieldUpdateOperationsInput | string
    usuario_imagem?: StringFieldUpdateOperationsInput | string
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

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type ImoveisScalarRelationFilter = {
    is?: imoveisWhereInput
    isNot?: imoveisWhereInput
  }

  export type favoritosCountOrderByAggregateInput = {
    favorito_id?: SortOrder
    usuario_id?: SortOrder
    imovel_id?: SortOrder
  }

  export type favoritosAvgOrderByAggregateInput = {
    favorito_id?: SortOrder
    usuario_id?: SortOrder
    imovel_id?: SortOrder
  }

  export type favoritosMaxOrderByAggregateInput = {
    favorito_id?: SortOrder
    usuario_id?: SortOrder
    imovel_id?: SortOrder
  }

  export type favoritosMinOrderByAggregateInput = {
    favorito_id?: SortOrder
    usuario_id?: SortOrder
    imovel_id?: SortOrder
  }

  export type favoritosSumOrderByAggregateInput = {
    favorito_id?: SortOrder
    usuario_id?: SortOrder
    imovel_id?: SortOrder
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type FavoritosListRelationFilter = {
    every?: favoritosWhereInput
    some?: favoritosWhereInput
    none?: favoritosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type favoritosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imoveisOrderByRelevanceInput = {
    fields: imoveisOrderByRelevanceFieldEnum | imoveisOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type imoveisCountOrderByAggregateInput = {
    imovel_id?: SortOrder
    imovel_estado?: SortOrder
    imovel_cidade?: SortOrder
    imovel_bairro?: SortOrder
    imovel_logradouro?: SortOrder
    imovel_numero?: SortOrder
    imovel_complemento?: SortOrder
    imovel_cep?: SortOrder
    imovel_tipo?: SortOrder
    imovel_modalidade?: SortOrder
    imovel_valor?: SortOrder
    imovel_valor_condominio?: SortOrder
    imovel_descricao?: SortOrder
    imovel_quartos?: SortOrder
    imovel_garagens?: SortOrder
    imovel_banheiros?: SortOrder
    imovel_imagem?: SortOrder
    imovel_area?: SortOrder
    imovel_contato1?: SortOrder
    imovel_contato2?: SortOrder
  }

  export type imoveisAvgOrderByAggregateInput = {
    imovel_id?: SortOrder
    imovel_valor?: SortOrder
    imovel_valor_condominio?: SortOrder
    imovel_quartos?: SortOrder
    imovel_garagens?: SortOrder
    imovel_banheiros?: SortOrder
    imovel_area?: SortOrder
  }

  export type imoveisMaxOrderByAggregateInput = {
    imovel_id?: SortOrder
    imovel_estado?: SortOrder
    imovel_cidade?: SortOrder
    imovel_bairro?: SortOrder
    imovel_logradouro?: SortOrder
    imovel_numero?: SortOrder
    imovel_complemento?: SortOrder
    imovel_cep?: SortOrder
    imovel_tipo?: SortOrder
    imovel_modalidade?: SortOrder
    imovel_valor?: SortOrder
    imovel_valor_condominio?: SortOrder
    imovel_descricao?: SortOrder
    imovel_quartos?: SortOrder
    imovel_garagens?: SortOrder
    imovel_banheiros?: SortOrder
    imovel_imagem?: SortOrder
    imovel_area?: SortOrder
    imovel_contato1?: SortOrder
    imovel_contato2?: SortOrder
  }

  export type imoveisMinOrderByAggregateInput = {
    imovel_id?: SortOrder
    imovel_estado?: SortOrder
    imovel_cidade?: SortOrder
    imovel_bairro?: SortOrder
    imovel_logradouro?: SortOrder
    imovel_numero?: SortOrder
    imovel_complemento?: SortOrder
    imovel_cep?: SortOrder
    imovel_tipo?: SortOrder
    imovel_modalidade?: SortOrder
    imovel_valor?: SortOrder
    imovel_valor_condominio?: SortOrder
    imovel_descricao?: SortOrder
    imovel_quartos?: SortOrder
    imovel_garagens?: SortOrder
    imovel_banheiros?: SortOrder
    imovel_imagem?: SortOrder
    imovel_area?: SortOrder
    imovel_contato1?: SortOrder
    imovel_contato2?: SortOrder
  }

  export type imoveisSumOrderByAggregateInput = {
    imovel_id?: SortOrder
    imovel_valor?: SortOrder
    imovel_valor_condominio?: SortOrder
    imovel_quartos?: SortOrder
    imovel_garagens?: SortOrder
    imovel_banheiros?: SortOrder
    imovel_area?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    usuario_email?: SortOrder
    usuario_telefone?: SortOrder
    usuario_senha?: SortOrder
    usuario_cpf?: SortOrder
    usuario_nivel?: SortOrder
    usuario_nascimento?: SortOrder
    usuario_imagem?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    usuario_email?: SortOrder
    usuario_telefone?: SortOrder
    usuario_senha?: SortOrder
    usuario_cpf?: SortOrder
    usuario_nivel?: SortOrder
    usuario_nascimento?: SortOrder
    usuario_imagem?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    usuario_nome?: SortOrder
    usuario_email?: SortOrder
    usuario_telefone?: SortOrder
    usuario_senha?: SortOrder
    usuario_cpf?: SortOrder
    usuario_nivel?: SortOrder
    usuario_nascimento?: SortOrder
    usuario_imagem?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type usuariosCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<usuariosCreateWithoutFavoritosInput, usuariosUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutFavoritosInput
    connect?: usuariosWhereUniqueInput
  }

  export type imoveisCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<imoveisCreateWithoutFavoritosInput, imoveisUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: imoveisCreateOrConnectWithoutFavoritosInput
    connect?: imoveisWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<usuariosCreateWithoutFavoritosInput, usuariosUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutFavoritosInput
    upsert?: usuariosUpsertWithoutFavoritosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutFavoritosInput, usuariosUpdateWithoutFavoritosInput>, usuariosUncheckedUpdateWithoutFavoritosInput>
  }

  export type imoveisUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<imoveisCreateWithoutFavoritosInput, imoveisUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: imoveisCreateOrConnectWithoutFavoritosInput
    upsert?: imoveisUpsertWithoutFavoritosInput
    connect?: imoveisWhereUniqueInput
    update?: XOR<XOR<imoveisUpdateToOneWithWhereWithoutFavoritosInput, imoveisUpdateWithoutFavoritosInput>, imoveisUncheckedUpdateWithoutFavoritosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type favoritosCreateNestedManyWithoutImoveisInput = {
    create?: XOR<favoritosCreateWithoutImoveisInput, favoritosUncheckedCreateWithoutImoveisInput> | favoritosCreateWithoutImoveisInput[] | favoritosUncheckedCreateWithoutImoveisInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutImoveisInput | favoritosCreateOrConnectWithoutImoveisInput[]
    createMany?: favoritosCreateManyImoveisInputEnvelope
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
  }

  export type favoritosUncheckedCreateNestedManyWithoutImoveisInput = {
    create?: XOR<favoritosCreateWithoutImoveisInput, favoritosUncheckedCreateWithoutImoveisInput> | favoritosCreateWithoutImoveisInput[] | favoritosUncheckedCreateWithoutImoveisInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutImoveisInput | favoritosCreateOrConnectWithoutImoveisInput[]
    createMany?: favoritosCreateManyImoveisInputEnvelope
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type favoritosUpdateManyWithoutImoveisNestedInput = {
    create?: XOR<favoritosCreateWithoutImoveisInput, favoritosUncheckedCreateWithoutImoveisInput> | favoritosCreateWithoutImoveisInput[] | favoritosUncheckedCreateWithoutImoveisInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutImoveisInput | favoritosCreateOrConnectWithoutImoveisInput[]
    upsert?: favoritosUpsertWithWhereUniqueWithoutImoveisInput | favoritosUpsertWithWhereUniqueWithoutImoveisInput[]
    createMany?: favoritosCreateManyImoveisInputEnvelope
    set?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    disconnect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    delete?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    update?: favoritosUpdateWithWhereUniqueWithoutImoveisInput | favoritosUpdateWithWhereUniqueWithoutImoveisInput[]
    updateMany?: favoritosUpdateManyWithWhereWithoutImoveisInput | favoritosUpdateManyWithWhereWithoutImoveisInput[]
    deleteMany?: favoritosScalarWhereInput | favoritosScalarWhereInput[]
  }

  export type favoritosUncheckedUpdateManyWithoutImoveisNestedInput = {
    create?: XOR<favoritosCreateWithoutImoveisInput, favoritosUncheckedCreateWithoutImoveisInput> | favoritosCreateWithoutImoveisInput[] | favoritosUncheckedCreateWithoutImoveisInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutImoveisInput | favoritosCreateOrConnectWithoutImoveisInput[]
    upsert?: favoritosUpsertWithWhereUniqueWithoutImoveisInput | favoritosUpsertWithWhereUniqueWithoutImoveisInput[]
    createMany?: favoritosCreateManyImoveisInputEnvelope
    set?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    disconnect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    delete?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    update?: favoritosUpdateWithWhereUniqueWithoutImoveisInput | favoritosUpdateWithWhereUniqueWithoutImoveisInput[]
    updateMany?: favoritosUpdateManyWithWhereWithoutImoveisInput | favoritosUpdateManyWithWhereWithoutImoveisInput[]
    deleteMany?: favoritosScalarWhereInput | favoritosScalarWhereInput[]
  }

  export type favoritosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<favoritosCreateWithoutUsuariosInput, favoritosUncheckedCreateWithoutUsuariosInput> | favoritosCreateWithoutUsuariosInput[] | favoritosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutUsuariosInput | favoritosCreateOrConnectWithoutUsuariosInput[]
    createMany?: favoritosCreateManyUsuariosInputEnvelope
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
  }

  export type favoritosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<favoritosCreateWithoutUsuariosInput, favoritosUncheckedCreateWithoutUsuariosInput> | favoritosCreateWithoutUsuariosInput[] | favoritosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutUsuariosInput | favoritosCreateOrConnectWithoutUsuariosInput[]
    createMany?: favoritosCreateManyUsuariosInputEnvelope
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
  }

  export type favoritosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<favoritosCreateWithoutUsuariosInput, favoritosUncheckedCreateWithoutUsuariosInput> | favoritosCreateWithoutUsuariosInput[] | favoritosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutUsuariosInput | favoritosCreateOrConnectWithoutUsuariosInput[]
    upsert?: favoritosUpsertWithWhereUniqueWithoutUsuariosInput | favoritosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: favoritosCreateManyUsuariosInputEnvelope
    set?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    disconnect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    delete?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    update?: favoritosUpdateWithWhereUniqueWithoutUsuariosInput | favoritosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: favoritosUpdateManyWithWhereWithoutUsuariosInput | favoritosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: favoritosScalarWhereInput | favoritosScalarWhereInput[]
  }

  export type favoritosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<favoritosCreateWithoutUsuariosInput, favoritosUncheckedCreateWithoutUsuariosInput> | favoritosCreateWithoutUsuariosInput[] | favoritosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: favoritosCreateOrConnectWithoutUsuariosInput | favoritosCreateOrConnectWithoutUsuariosInput[]
    upsert?: favoritosUpsertWithWhereUniqueWithoutUsuariosInput | favoritosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: favoritosCreateManyUsuariosInputEnvelope
    set?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    disconnect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    delete?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    connect?: favoritosWhereUniqueInput | favoritosWhereUniqueInput[]
    update?: favoritosUpdateWithWhereUniqueWithoutUsuariosInput | favoritosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: favoritosUpdateManyWithWhereWithoutUsuariosInput | favoritosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: favoritosScalarWhereInput | favoritosScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type usuariosCreateWithoutFavoritosInput = {
    usuario_nome: string
    usuario_email: string
    usuario_telefone: string
    usuario_senha: string
    usuario_cpf?: string | null
    usuario_nivel?: string
    usuario_nascimento: string
    usuario_imagem: string
  }

  export type usuariosUncheckedCreateWithoutFavoritosInput = {
    usuario_id?: number
    usuario_nome: string
    usuario_email: string
    usuario_telefone: string
    usuario_senha: string
    usuario_cpf?: string | null
    usuario_nivel?: string
    usuario_nascimento: string
    usuario_imagem: string
  }

  export type usuariosCreateOrConnectWithoutFavoritosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutFavoritosInput, usuariosUncheckedCreateWithoutFavoritosInput>
  }

  export type imoveisCreateWithoutFavoritosInput = {
    imovel_estado: string
    imovel_cidade: string
    imovel_bairro: string
    imovel_logradouro: string
    imovel_numero: string
    imovel_complemento?: string | null
    imovel_cep: string
    imovel_tipo: string
    imovel_modalidade: string
    imovel_valor: number
    imovel_valor_condominio?: number | null
    imovel_descricao: string
    imovel_quartos: number
    imovel_garagens: number
    imovel_banheiros: number
    imovel_imagem: string
    imovel_area: number
    imovel_contato1: string
    imovel_contato2?: string | null
  }

  export type imoveisUncheckedCreateWithoutFavoritosInput = {
    imovel_id?: number
    imovel_estado: string
    imovel_cidade: string
    imovel_bairro: string
    imovel_logradouro: string
    imovel_numero: string
    imovel_complemento?: string | null
    imovel_cep: string
    imovel_tipo: string
    imovel_modalidade: string
    imovel_valor: number
    imovel_valor_condominio?: number | null
    imovel_descricao: string
    imovel_quartos: number
    imovel_garagens: number
    imovel_banheiros: number
    imovel_imagem: string
    imovel_area: number
    imovel_contato1: string
    imovel_contato2?: string | null
  }

  export type imoveisCreateOrConnectWithoutFavoritosInput = {
    where: imoveisWhereUniqueInput
    create: XOR<imoveisCreateWithoutFavoritosInput, imoveisUncheckedCreateWithoutFavoritosInput>
  }

  export type usuariosUpsertWithoutFavoritosInput = {
    update: XOR<usuariosUpdateWithoutFavoritosInput, usuariosUncheckedUpdateWithoutFavoritosInput>
    create: XOR<usuariosCreateWithoutFavoritosInput, usuariosUncheckedCreateWithoutFavoritosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutFavoritosInput, usuariosUncheckedUpdateWithoutFavoritosInput>
  }

  export type usuariosUpdateWithoutFavoritosInput = {
    usuario_nome?: StringFieldUpdateOperationsInput | string
    usuario_email?: StringFieldUpdateOperationsInput | string
    usuario_telefone?: StringFieldUpdateOperationsInput | string
    usuario_senha?: StringFieldUpdateOperationsInput | string
    usuario_cpf?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nivel?: StringFieldUpdateOperationsInput | string
    usuario_nascimento?: StringFieldUpdateOperationsInput | string
    usuario_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateWithoutFavoritosInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    usuario_nome?: StringFieldUpdateOperationsInput | string
    usuario_email?: StringFieldUpdateOperationsInput | string
    usuario_telefone?: StringFieldUpdateOperationsInput | string
    usuario_senha?: StringFieldUpdateOperationsInput | string
    usuario_cpf?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_nivel?: StringFieldUpdateOperationsInput | string
    usuario_nascimento?: StringFieldUpdateOperationsInput | string
    usuario_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type imoveisUpsertWithoutFavoritosInput = {
    update: XOR<imoveisUpdateWithoutFavoritosInput, imoveisUncheckedUpdateWithoutFavoritosInput>
    create: XOR<imoveisCreateWithoutFavoritosInput, imoveisUncheckedCreateWithoutFavoritosInput>
    where?: imoveisWhereInput
  }

  export type imoveisUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: imoveisWhereInput
    data: XOR<imoveisUpdateWithoutFavoritosInput, imoveisUncheckedUpdateWithoutFavoritosInput>
  }

  export type imoveisUpdateWithoutFavoritosInput = {
    imovel_estado?: StringFieldUpdateOperationsInput | string
    imovel_cidade?: StringFieldUpdateOperationsInput | string
    imovel_bairro?: StringFieldUpdateOperationsInput | string
    imovel_logradouro?: StringFieldUpdateOperationsInput | string
    imovel_numero?: StringFieldUpdateOperationsInput | string
    imovel_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    imovel_cep?: StringFieldUpdateOperationsInput | string
    imovel_tipo?: StringFieldUpdateOperationsInput | string
    imovel_modalidade?: StringFieldUpdateOperationsInput | string
    imovel_valor?: FloatFieldUpdateOperationsInput | number
    imovel_valor_condominio?: NullableFloatFieldUpdateOperationsInput | number | null
    imovel_descricao?: StringFieldUpdateOperationsInput | string
    imovel_quartos?: IntFieldUpdateOperationsInput | number
    imovel_garagens?: IntFieldUpdateOperationsInput | number
    imovel_banheiros?: IntFieldUpdateOperationsInput | number
    imovel_imagem?: StringFieldUpdateOperationsInput | string
    imovel_area?: IntFieldUpdateOperationsInput | number
    imovel_contato1?: StringFieldUpdateOperationsInput | string
    imovel_contato2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imoveisUncheckedUpdateWithoutFavoritosInput = {
    imovel_id?: IntFieldUpdateOperationsInput | number
    imovel_estado?: StringFieldUpdateOperationsInput | string
    imovel_cidade?: StringFieldUpdateOperationsInput | string
    imovel_bairro?: StringFieldUpdateOperationsInput | string
    imovel_logradouro?: StringFieldUpdateOperationsInput | string
    imovel_numero?: StringFieldUpdateOperationsInput | string
    imovel_complemento?: NullableStringFieldUpdateOperationsInput | string | null
    imovel_cep?: StringFieldUpdateOperationsInput | string
    imovel_tipo?: StringFieldUpdateOperationsInput | string
    imovel_modalidade?: StringFieldUpdateOperationsInput | string
    imovel_valor?: FloatFieldUpdateOperationsInput | number
    imovel_valor_condominio?: NullableFloatFieldUpdateOperationsInput | number | null
    imovel_descricao?: StringFieldUpdateOperationsInput | string
    imovel_quartos?: IntFieldUpdateOperationsInput | number
    imovel_garagens?: IntFieldUpdateOperationsInput | number
    imovel_banheiros?: IntFieldUpdateOperationsInput | number
    imovel_imagem?: StringFieldUpdateOperationsInput | string
    imovel_area?: IntFieldUpdateOperationsInput | number
    imovel_contato1?: StringFieldUpdateOperationsInput | string
    imovel_contato2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favoritosCreateWithoutImoveisInput = {
    usuarios: usuariosCreateNestedOneWithoutFavoritosInput
  }

  export type favoritosUncheckedCreateWithoutImoveisInput = {
    favorito_id?: number
    usuario_id: number
  }

  export type favoritosCreateOrConnectWithoutImoveisInput = {
    where: favoritosWhereUniqueInput
    create: XOR<favoritosCreateWithoutImoveisInput, favoritosUncheckedCreateWithoutImoveisInput>
  }

  export type favoritosCreateManyImoveisInputEnvelope = {
    data: favoritosCreateManyImoveisInput | favoritosCreateManyImoveisInput[]
    skipDuplicates?: boolean
  }

  export type favoritosUpsertWithWhereUniqueWithoutImoveisInput = {
    where: favoritosWhereUniqueInput
    update: XOR<favoritosUpdateWithoutImoveisInput, favoritosUncheckedUpdateWithoutImoveisInput>
    create: XOR<favoritosCreateWithoutImoveisInput, favoritosUncheckedCreateWithoutImoveisInput>
  }

  export type favoritosUpdateWithWhereUniqueWithoutImoveisInput = {
    where: favoritosWhereUniqueInput
    data: XOR<favoritosUpdateWithoutImoveisInput, favoritosUncheckedUpdateWithoutImoveisInput>
  }

  export type favoritosUpdateManyWithWhereWithoutImoveisInput = {
    where: favoritosScalarWhereInput
    data: XOR<favoritosUpdateManyMutationInput, favoritosUncheckedUpdateManyWithoutImoveisInput>
  }

  export type favoritosScalarWhereInput = {
    AND?: favoritosScalarWhereInput | favoritosScalarWhereInput[]
    OR?: favoritosScalarWhereInput[]
    NOT?: favoritosScalarWhereInput | favoritosScalarWhereInput[]
    favorito_id?: IntFilter<"favoritos"> | number
    usuario_id?: IntFilter<"favoritos"> | number
    imovel_id?: IntFilter<"favoritos"> | number
  }

  export type favoritosCreateWithoutUsuariosInput = {
    imoveis: imoveisCreateNestedOneWithoutFavoritosInput
  }

  export type favoritosUncheckedCreateWithoutUsuariosInput = {
    favorito_id?: number
    imovel_id: number
  }

  export type favoritosCreateOrConnectWithoutUsuariosInput = {
    where: favoritosWhereUniqueInput
    create: XOR<favoritosCreateWithoutUsuariosInput, favoritosUncheckedCreateWithoutUsuariosInput>
  }

  export type favoritosCreateManyUsuariosInputEnvelope = {
    data: favoritosCreateManyUsuariosInput | favoritosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type favoritosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: favoritosWhereUniqueInput
    update: XOR<favoritosUpdateWithoutUsuariosInput, favoritosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<favoritosCreateWithoutUsuariosInput, favoritosUncheckedCreateWithoutUsuariosInput>
  }

  export type favoritosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: favoritosWhereUniqueInput
    data: XOR<favoritosUpdateWithoutUsuariosInput, favoritosUncheckedUpdateWithoutUsuariosInput>
  }

  export type favoritosUpdateManyWithWhereWithoutUsuariosInput = {
    where: favoritosScalarWhereInput
    data: XOR<favoritosUpdateManyMutationInput, favoritosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type favoritosCreateManyImoveisInput = {
    favorito_id?: number
    usuario_id: number
  }

  export type favoritosUpdateWithoutImoveisInput = {
    usuarios?: usuariosUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type favoritosUncheckedUpdateWithoutImoveisInput = {
    favorito_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritosUncheckedUpdateManyWithoutImoveisInput = {
    favorito_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritosCreateManyUsuariosInput = {
    favorito_id?: number
    imovel_id: number
  }

  export type favoritosUpdateWithoutUsuariosInput = {
    imoveis?: imoveisUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type favoritosUncheckedUpdateWithoutUsuariosInput = {
    favorito_id?: IntFieldUpdateOperationsInput | number
    imovel_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritosUncheckedUpdateManyWithoutUsuariosInput = {
    favorito_id?: IntFieldUpdateOperationsInput | number
    imovel_id?: IntFieldUpdateOperationsInput | number
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