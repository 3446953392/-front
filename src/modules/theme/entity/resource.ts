import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * theme模块-资源调度
 */
@Entity('theme_resource')
export class ThemeResourceEntity extends BaseEntity {
  @Column({ comment: '资源名称' })
  resourceName: string;

  @Column({ comment: '资源所属活动' })
  activity: string;

  @Column({ comment: '资源花费', type: 'decimal', precision: 10, scale: 2 })
  cost: number;

  @Column({ comment: '创建时间', type: 'datetime' })
  createTime: Date;

  @Column({ comment: '修改时间', type: 'datetime' })
  updateTime: Date;
}
