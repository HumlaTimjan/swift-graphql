/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as swapi from './types/backingTypes'

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {
  Episode: 5 | 6 | 4
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Human: {
    // root type
    id?: string | null // ID
    name?: string | null // String
  }
  Query: {}
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  Episode: NexusGenEnums['Episode']
  String: NexusGenScalars['String']
  Int: NexusGenScalars['Int']
  Float: NexusGenScalars['Float']
  Boolean: NexusGenScalars['Boolean']
  ID: NexusGenScalars['ID']
}

export interface NexusGenFieldTypes {
  Human: {
    // field return type
    appearsIn: Array<NexusGenEnums['Episode'] | null> | null // [Episode]
    homePlanet: string | null // String
    id: string | null // ID
    name: string | null // String
  }
  Query: {
    // field return type
    human: NexusGenRootTypes['Human'] | null // Human
    humans: Array<NexusGenRootTypes['Human'] | null> | null // [Human]
    test: Array<string | null> | null // [ID]
  }
}

export interface NexusGenArgTypes {
  Query: {
    human: {
      // args
      id: string // ID!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = 'Human' | 'Query'

export type NexusGenInputNames = never

export type NexusGenEnumNames = 'Episode'

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = 'Boolean' | 'Float' | 'ID' | 'Int' | 'String'

export type NexusGenUnionNames = never

export interface NexusGenTypes {
  context: swapi.ContextType
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  allTypes: NexusGenAllTypes
  inheritedFields: NexusGenInheritedFields
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
}
