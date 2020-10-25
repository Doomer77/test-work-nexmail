import inboxIcon from '../../../../img/inbox.svg';
import sentMailIcon from '../../../../img/sent.svg';
import draftIcon from '../../../../img/draft.svg';
import trashIcon from '../../../../img/trash.svg';
import AttachmentsIcon from '../../../../img/attachments.svg';
import moreIcon from '../../../../img/more.svg';
export const navConf = [
  {
    key: 1,
    name: 'Inbox',
    icon: inboxIcon,
    qnt: 200,
    active: true
  },
  {
    key: 2,
    name: 'Sent Mail',
    icon: sentMailIcon,
    qnt: false,
    active: false
  },
  { 
    key: 3,
    name: 'Drafts',
    icon: draftIcon,
    qnt: false,
    active: false
  }, 
  {
    key: 4,
    name: 'Trach',
    icon: trashIcon,
    qnt: 2,
    active: false
  },
  {
    key: 5,
    name: 'Attachments',
    icon: AttachmentsIcon,
    qnt: false,
    active: false
  },
  {
    key: 6,
    name: 'More...',
    icon: moreIcon,
    qnt: false,
    active: false
  }
];