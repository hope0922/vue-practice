//Element-ui按需加載
import Vue from 'vue'
import { Button,  Message, Input } from 'element-ui';


Vue.use(Button);
Vue.use(Input);


Vue.prototype.$message = Message;