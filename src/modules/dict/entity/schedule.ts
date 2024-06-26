import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * dict模块-资源调度
 */
@Entity('dict_resource_schedule')
export class DictResourceScheduleEntity extends BaseEntity {
  @Column({ comment: '所属活动名称' })
  activityName: string;

  @Column({ comment: '资源名称' })
  resourceName: string;

  @Column({ comment: '资源花费' })
  resourceCost: number;

  @Column({ comment: '创建时间', type: 'datetime' })
  createTime: Date;

  @Column({ comment: '修改时间', type: 'datetime' })
  updateTime: Date;
}
