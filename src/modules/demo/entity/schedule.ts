import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * demo模块-资源调度
 */
@Entity('demo_resource_schedule')
export class DemoResourceScheduleEntity extends BaseEntity {
  @Index()
  @Column({ comment: '活动' })
  activity: string;

  @Column({ comment: '资源名称' })
  resourceName: string;

  @Column({ comment: '花费', type: 'decimal', precision: 10, scale: 2 })
  cost: number;
}
