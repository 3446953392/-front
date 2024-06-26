import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * base模块-订单确认
 */
@Entity('base_order_confirm')
export class BaseOrderConfirmEntity extends BaseEntity {
  @Index()
  @Column({ comment: '订单编号', length: 50 })
  orderNo: string;

  @Column({ comment: '订单日期', type: 'date' })
  orderDate: Date;

  @Column({ comment: '用户姓名', length: 100 })
  userName: string;

  @Column({ comment: '联系方式', length: 20 })
  contactInfo: string;

  @Column({ comment: '时间表', type: 'json' })
  timeTable: object;

  @Column({ comment: '参加人数', type: 'int' })
  participantCount: number;

  @Column({ comment: '项目名称', length: 100 })
  projectName: string;

  @Column({ comment: '总费用', type: 'decimal', precision: 10, scale: 2 })
  totalFee: number;

  @Column({ comment: '是否确认', default: 0, type: 'tinyint' })
  isConfirmed: number;
}
