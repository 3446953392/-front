import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * task模块-订单确认
 */
@Entity('task_order_confirm')
export class TaskOrderConfirmEntity extends BaseEntity {
  @Index()
  @Column({ comment: '订单编号', length: 50 })
  orderNo: string;

  @Column({ comment: '订单日期', type: 'date' })
  orderDate: Date;

  @Column({ comment: '用户姓名', length: 100 })
  userName: string;

  @Column({ comment: '联系方式', length: 20 })
  contact: string;

  @Column({ comment: '订单名称', length: 200 })
  orderName: string;

  @Column({ comment: '订单是否确认', default: 0, type: 'tinyint' })
  isConfirmed: number;

  @Column({ comment: '订单费用', type: 'decimal', precision: 10, scale: 2 })
  orderAmount: number;
}
