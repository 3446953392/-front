import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * user模块-资源调度
 */
@Entity('user_resource_schedule')
export class UserResourceScheduleEntity extends BaseEntity {
  @Index()
  @Column({ comment: '活动名称', length: 100 })
  activityName: string;

  @Column({ comment: '资源名称', length: 100 })
  resourceName: string;

  @Column({ comment: '资源花销', type: 'decimal', precision: 10, scale: 2 })
  resourceCost: number;

  @Column({ comment: '状态 0-禁用 1-启用', default: 1 })
  status: number;
}
