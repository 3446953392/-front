import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * base模块-资源调度
 */
@Entity('base_resource_schedule')
export class BaseResourceScheduleEntity extends BaseEntity {
  @Column({ comment: '资源名称' })
  resourceName: string;

  @Column({ comment: '资源所属活动' })
  resourceActivity: string;

  @Column({ comment: '资源类型' })
  resourceType: string;

  @Column({ comment: '资源花费' })
  resourceCost: number;
}
