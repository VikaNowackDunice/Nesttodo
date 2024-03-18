import { Table, Column, Model, CreatedAt, UpdatedAt, DataType, Sequelize, } from 'sequelize-typescript';

interface TodoCreationAttr{
  text:string;
  isChecked: boolean;
}

@Table({tableName: 'todolist'})
export class Todo extends Model<Todo, TodoCreationAttr> {
  static filter: any;
  static isChecked: any;
  static findByIdAndDelete(id: any) {
    throw new Error('Method not implemented.');
  }
  @Column({ type: DataType.STRING, allowNull: true})
  text: string;

  @Column({ type: DataType.INTEGER, primaryKey: true})
  id: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false})
  isChecked: boolean;
  
  @Column({ type: DataType.DATE})
  createdAt

  @Column({ type: DataType.DATE})
  updatedAt
}