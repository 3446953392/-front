import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * demo模块-活动展示
 */
@Entity('demo_activity')
export class DemoActivityEntity extends BaseEntity {
  @Column({ comment: '活动名称' })
  name: string;

  @Column({ comment: '活动图片', nullable: true })
  image: string;

  @Column({ comment: '活动介绍', type: 'text', nullable: true })
  description: string;
}
