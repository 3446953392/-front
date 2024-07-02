import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * demo模块-基地管理
 */
@Entity('demo_base_manage')
export class DemoBaseManageEntity extends BaseEntity {
  @Column({ comment: '名称' })
  name: string;

  @Column({ comment: '报名数', type: 'int' })
  signupCount: number;

  @Column({ comment: '简介', type: 'text', nullable: true })
  summary: string;

  @Column({ comment: '地点' })
  location: string;

  @Column({ comment: '时间', type: 'datetime' })
  time: Date;

  @Column({ comment: '基地介绍', type: 'text' })
  baseIntroduction: string;

  @Column({ comment: '研学流程', type: 'text' })
  studyProcess: string;

  @Column({ comment: '餐饮名称' })
  cateringName: string;

  @Column({ comment: '餐饮地址' })
  cateringAddress: string;

  @Column({ comment: '住宿名称' })
  accommodationName: string;

  @Column({ comment: '住宿地址' })
  accommodationAddress: string;

  @Column({ comment: '文创名称' })
  culturalCreativeName: string;

  @Column({ comment: '文创图片', type: 'text', nullable: true })
  culturalCreativeImage: string;

  @Column({ comment: '基地位置-经度', type: 'decimal', precision: 10, scale: 7 })
  longitude: number;

  @Column({ comment: '基地位置-纬度', type: 'decimal', precision: 10, scale: 7 })
  latitude: number;
}
