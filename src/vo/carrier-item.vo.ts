// import package modules
import { Field, ObjectType } from '@nestjs/graphql';

// Import global modules
import { Logo } from '@/enum/logo.enum';

// Import local modules

@ObjectType()
export class CarrierItemVO {
  @Field(() => String, {
    description: '프로젝트 이름',
  })
  name: string;

  @Field(() => Boolean, {
    description: '프로젝트 진행 중 여부',
  })
  completed: boolean;

  @Field(() => String, {
    description: '프로젝트 시작월',
  })
  startDate: string;

  @Field(() => String, {
    description: '프로젝트 종료월',
  })
  endDate: string;

  @Field(() => [Logo], {
    description: '프로젝트에 쓰인 기술 태그 목록',
  })
  techList: Logo[];

  @Field(() => String, {
    description: '프로젝트 설명 (성과/결과)',
  })
  description: string;
}
