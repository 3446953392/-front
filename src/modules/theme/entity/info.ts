import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * theme模块-基地管理
 */
@Entity('theme_base_info')
export class ThemeBaseInfoEntity extends BaseEntity {
  @Column({ comment: '基地名称' })
  name: string;

  @Column({ comment: '省' })
  province: string;

  @Column({ comment: '市' })
  city: string;

  @Column({ comment: '区' })
  district: string;

  @Column({ comment: '简介', type: 'text' })
  summary: string;

  @Column({ comment: '特色内容', type: 'text' })
  featureContent: string;

  @Column({ comment: '图片' })
  images: string;
}
