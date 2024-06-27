import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * base模块-基地管理
 */
@Entity('base_management')
export class BaseManagementEntity extends BaseEntity {
  @Column({ comment: '基地名称' })
  name: string;

  @Column({ comment: '省份' })
  province: string;

  @Column({ comment: '城市' })
  city: string;

  @Column({ comment: '区县' })
  district: string;

  @Column({ comment: '简介', type: 'text', nullable: true })
  summary: string;

  @Column({ comment: '特色内容', type: 'text', nullable: true })
  featureContent: string;

  @Column({ comment: '图片', nullable: true })
  images: string;
}
