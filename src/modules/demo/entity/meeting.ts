import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * demo模块-重要会议
 */
@Entity('demo_important_meeting')
export class DemoImportantMeetingEntity extends BaseEntity {
  @Column({ comment: '会议名称' })
  meetingName: string;

  @Column({ comment: '链接' })
  link: string;
}
