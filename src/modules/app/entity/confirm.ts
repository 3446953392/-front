import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * app模块-订单确认
 */
@Entity('app_order_confirm')
export class AppOrderConfirmEntity extends BaseEntity {
  @Column({ comment: '订单名称' })
  orderName: string;

  @Column({ comment: '订单是否确认', default: 0, type: 'tinyint' })
  isConfirmed: number;

  @Column({ comment: '订单价格', type: 'decimal', precision: 10, scale: 2 })
  orderPrice: number;
}
