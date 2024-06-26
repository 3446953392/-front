import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * user模块-资源调度
 */
@Entity('user_resource')
export class UserResourceEntity extends BaseEntity {
  @Column({ comment: '资源类型', length: 50 })
  resourceType: string;

  @Column({ comment: '资金数量', type: 'decimal', precision: 10, scale: 2 })
  fundAmount: number;

  @Column({ comment: '资源名称', length: 100 })
  resourceName: string;

  @Column({ comment: '资源id', length: 50 })
  resourceId: string;
}
