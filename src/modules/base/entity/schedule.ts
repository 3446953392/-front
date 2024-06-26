import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * base模块-资源调度
 */
@Entity('base_resource_schedule')
export class BaseResourceScheduleEntity extends BaseEntity {
  @Column({ comment: '资源名称' })
  resourceName: string;

  @Column({ comment: '资源花费', type: 'decimal', precision: 10, scale: 2 })
  resourceCost: number;

  @Column({ comment: '资源时间', type: 'datetime' })
  resourceTime: Date;

  @Column({ comment: '资源使用人数', type: 'int' })
  resourceUsers: number;

  @Column({ comment: '联系方式' })
  contact: string;
}
