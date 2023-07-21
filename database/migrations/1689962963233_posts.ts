import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_d').unsigned().references('id').inTable('users').notNullable()
      table.string('title', 250)
      table.text('content')
      table.string('imagge', 450)
      table.string('meta_title', 250)
      table.string('meta_desc', 450)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
