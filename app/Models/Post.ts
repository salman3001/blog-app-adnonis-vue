import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Tag from './Tag'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(()=>User)
  public user_id :HasOne<typeof User>

  @hasMany(()=>Tag)
  public tags : HasMany<typeof Tag>

  @column()
  public content :string

  @column()
  public meta_title :string

  @column()
  public meta_desc :string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
