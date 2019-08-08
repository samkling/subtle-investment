import {PageInfo} from './PageInfo';

const SAM = "Sam Kling";
const IMAGE_PATH = "../../assets/img/";

export const MAIN_PAGES: PageInfo[] = [
  {
    id: '',
    heading: "Subtle Investing",
    headerImage: IMAGE_PATH + 'home-page-banner.jpg',
    subHeading: "Making use of clever and indirect methods to better personal finance",
    post: ''
  },
  {
    id: '',
    heading: "About Me",
    headerImage: IMAGE_PATH + 'about-page-banner.jpg',
    subHeading: '',
    post: '',
  },
  {
    id: '',
    heading: "Contact Heading",
    headerImage: IMAGE_PATH + 'contact-bg.jpg',
    subHeading: "This is my Contact page",
    post: "This is my Contact post"
  }
];

export const BLOG_POSTS: PageInfo[] = [
  {
    id: 'best-credit-cards',
    heading: "This is about credit cards",
    headerImage: IMAGE_PATH + 'post-bg.jpg',
    subHeading: "Credit cards are fun",
    post: "Post about credit cards!",
    date: "September 24, 2019",
    author: SAM
  },
  {
    id: 'best-savings-accounts',
    heading: "This is about savings accounts",
    headerImage: IMAGE_PATH + 'post-bg.jpg',
    subHeading: "Savings accounts are fun",
    post: "Post about savings Accounts!",
    date: "September 24, 2019",
    author: SAM
  },
  {
    id: 'best-investing',
    heading: "This is about investing",
    headerImage: IMAGE_PATH + 'post-bg.jpg',
    subHeading: "Investing is fun!",
    post: "Post about investing!",
    date: "September 24, 2019",
    author: SAM
  }
];

