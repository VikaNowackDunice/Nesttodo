import { IsString, IsBoolean, IsNumber} from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  id?: number;

  @IsString()
  text: string;

  @IsBoolean()
  isChecked: boolean;
}
