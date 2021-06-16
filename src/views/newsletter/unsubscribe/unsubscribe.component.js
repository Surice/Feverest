import navbar from '@/components/header/header.component.vue';
import foot from '@/components/foot.vue';

import axios from 'axios';

export default {
    name: "Unsubscribe-Newsletter",
    data: function() {
        return {
            showSuccess: false,
            showDismissibleAlert: {
                trigger: false,
                content: ""
            },
            input: {
                mail: "",
            }
        }
    },
    components: {
        navbar,
        foot
    },
    methods: {
        async submit() {
            const self = this;

            await axios.post(`/api/newsletter/removeCustomer?mail=${this.input.mail}`).then(() => {
                self.showSuccess = true;
            }).catch(err=> {
                self.showDismissibleAlert.trigger = true;
                self.showDismissibleAlert.content = err.code || "unexpeced error";
            });
        }
    }
}