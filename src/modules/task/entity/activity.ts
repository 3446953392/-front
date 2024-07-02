import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * task模块-活动展示
 */
@Entity('task_activity')
export class TaskActivityEntity extends BaseEntity {
  @Column({ comment: '活动名称' })
  name: string;

  @Column({ comment: '活动介绍', type: 'text' })
  introduction: string;

  @Column({ comment: '活动图片', type: 'text' })
  image: string;
}
