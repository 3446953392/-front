import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * demo模块-重要讲话
 */
@Entity('demo_speech')
export class DemoSpeechEntity extends BaseEntity {
  @Column({ comment: '名称' })
  name: string;

  @Column({ comment: '链接' })
  link: string;
}
