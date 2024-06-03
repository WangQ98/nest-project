import { Contains, IsDate, IsEmail, IsFQDN, IsInt, Length, Max, Min } from 'class-validator';

export class Ppp {
  @Length(10, 20, {
    message(args) {
      console.info('🚀 ~ log:args ----->', args);
      const { targetName, property, value, constraints } = args;
      return `${targetName} 类的 ${property} 属性的值 ${value} 不满足约束: ${constraints}`
    }
  })
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;
}