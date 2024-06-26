import { Table, Column, Model,DataType } from 'sequelize-typescript'

import {TodoCreationAttr} from './types/types'

@Table( {tableName: 'todolist'} )
export class Todo extends Model<Todo, TodoCreationAttr> {

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