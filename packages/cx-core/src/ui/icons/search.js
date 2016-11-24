import {VDOM} from '../Widget';
import {Icon} from './Icon';

export default Icon.register('search', props => {
   return <svg
      {...props}
      viewBox="0 0 32 32">
      <path fill="currentColor"
            d="M25.595 22.036l-5.26-5.075c.75-1.18 1.206-2.56 1.206-4.05 0-4.32-3.63-7.82-8.103-7.82-4.477 0-8.107 3.503-8.107 7.82 0 4.32 3.63 7.825 8.106 7.825 1.544 0 2.972-.44 4.198-1.162l5.26 5.074c.37.356.98.354 1.35 0l1.352-1.304c.37-.357.37-.947 0-1.304zm-12.16-3.91c-2.985 0-5.405-2.336-5.405-5.216 0-2.88 2.42-5.214 5.405-5.214 2.984 0 5.404 2.335 5.404 5.214 0 2.88-2.42 5.215-5.407 5.215z" />
   </svg>
});
