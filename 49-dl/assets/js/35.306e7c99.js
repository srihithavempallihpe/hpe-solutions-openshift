(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{543:function(e,t,s){"use strict";s.r(t);var a=s(54),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"physical-node-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#physical-node-configuration"}},[e._v("#")]),e._v(" Physical node configuration")]),e._v(" "),s("p",[e._v("This section describes the configuration of the bare metal compute modules and is separated into sections that disseminate universal configuration parameters, pointers exclusively for virtualized nodes, and options used exclusively for bare metal nodes. The required configuration steps are outlined. These may be in the form of UI instruction pointers to code, or command line options. Use the CLI options or UI instruction pointers accordingly to reach the desired end state.")]),e._v(" "),s("h2",{attrs:{id:"red-hat-openshift-master-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-master-nodes"}},[e._v("#")]),e._v(" Red Hat OpenShift master nodes")]),e._v(" "),s("p",[e._v("Refer to the following steps to install the operating system on the bootstrap node and the master nodes.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Ensure that the location of ignition files of the corresponding nodes is updated in the PXE configuration files.")])]),e._v(" "),s("li",[s("p",[e._v("Ensure the MAC address of the network adapter in each DL Server is updated with the corresponding IP address in the DHCP configuration file.")])]),e._v(" "),s("li",[s("p",[e._v("Ensure that the load balancer server is up and running.")])]),e._v(" "),s("li",[s("p",[e._v("From the "),s("strong",[e._v("HPE iLO")]),e._v(" interface, navigate to "),s("strong",[e._v("Remote Session")]),e._v(" and launch console.")])]),e._v(" "),s("li",[s("p",[e._v("While booting, select the appropriate OS label.")])]),e._v(" "),s("li",[s("p",[e._v("Wait until the OS installation is complete.")])]),e._v(" "),s("li",[s("p",[e._v("Verify the installation by logging on to the node from the installer VM using the following command.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" core@"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" replace_with_node_fqdn_or_ip \n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("To utilize virtual machines as the OpenShift master nodes, refer to the sections "),s("a",{attrs:{href:"../solution-deployment/virtual-node-configuration#virtual-node-configuration"}},[e._v("Virtual node configuration")]),e._v(" and "),s("a",{attrs:{href:"../solution-deployment/virtual-node-configuration#deploying-virtual-master-nodes"}},[e._v("Deploying virtual master nodes")]),e._v(" in this document.")])])])]),e._v(" "),s("h2",{attrs:{id:"red-hat-openshift-worker-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-worker-nodes"}},[e._v("#")]),e._v(" Red Hat OpenShift worker nodes")]),e._v(" "),s("p",[e._v("Worker nodes for OpenShift 4 can run either RHCOS or RHEL 7.6. This section outlines the steps required to create worker nodes with either OS.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("To utilize virtual nodes as OpenShift worker nodes, refer the sections "),s("a",{attrs:{href:"../solution-deployment/virtual-node-configuration#virtual-node-configuration"}},[e._v("Virtual node configuration")]),e._v(" and "),s("a",{attrs:{href:"../solution-deployment/virtual-node-configuration#deploying-virtual-worker-nodes"}},[e._v("Deploying virtual worker nodes")]),e._v(" in this document.")])]),e._v(" "),s("h2",{attrs:{id:"red-hat-openshift-worker-nodes-with-rhcos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-worker-nodes-with-rhcos"}},[e._v("#")]),e._v(" Red Hat OpenShift worker nodes with RHCOS")]),e._v(" "),s("p",[e._v("Refer to the following steps to install the operating system on the worker nodes.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Ensure that the location of ignition files of the corresponding nodes is updated in the PXE configuration files.")])]),e._v(" "),s("li",[s("p",[e._v("Ensure the MAC address of the network adapter in each DL server is updated with the corresponding IP address in the DHCP configuration file.")])]),e._v(" "),s("li",[s("p",[e._v("Ensure that the load balancer server is up and running.")])]),e._v(" "),s("li",[s("p",[e._v("From the "),s("strong",[e._v("HPE iLO")]),e._v(" interface, navigate to "),s("strong",[e._v("Remote Session")]),e._v(" and launch Console.")])]),e._v(" "),s("li",[s("p",[e._v("While booting, select the appropriate OS label.")])]),e._v(" "),s("li",[s("p",[e._v("Wait until the OS installation is complete.")])]),e._v(" "),s("li",[s("p",[e._v("Verify the installation by logging on to the node from the installer VM using the following command.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" core@"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" replace_with_node_fqdn_or_ip\n")])])]),s("p",[e._v("After the RHCOS worker nodes are up and running, refer the "),s("a",{attrs:{href:"../solution-deployment/ocp-cluster-deployment#red-hat-openShift-container-platform-cluster-deployment"}},[e._v("Red Hat OpenShift Container Platform Cluster deployment")]),e._v(" to create the OpenShift 4 cluster.")])])]),e._v(" "),s("h2",{attrs:{id:"red-hat-openshift-worker-nodes-with-rhel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-worker-nodes-with-rhel"}},[e._v("#")]),e._v(" Red Hat OpenShift worker nodes with RHEL")]),e._v(" "),s("p",[e._v("Refer to the following steps to install the operating system on the worker nodes.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Ensure that the location of ignition files of the corresponding nodes is updated in the PXE configuration files.")])]),e._v(" "),s("li",[s("p",[e._v("Ensure the MAC address of the network adapter in each DL server is updated with the corresponding IP address in the DHCP configuration file.")])]),e._v(" "),s("li",[s("p",[e._v("Ensure that the load balancer server is up and running.")])]),e._v(" "),s("li",[s("p",[e._v("From the "),s("strong",[e._v("HPE iLO")]),e._v(" interface, navigate to "),s("strong",[e._v("Remote Session")]),e._v(" and launch Console.")])]),e._v(" "),s("li",[s("p",[e._v("While booting, select the appropriate OS label.")])]),e._v(" "),s("li",[s("p",[e._v("Wait until the OS installation is complete.")])]),e._v(" "),s("li",[s("p",[e._v("Verify the installation by logging on to the node from the installer VM using the following command.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" root@"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" replace_with_node_fqdn_or_ip\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"preparing-worker-nodes-with-rhel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparing-worker-nodes-with-rhel"}},[e._v("#")]),e._v(" Preparing worker nodes with RHEL")]),e._v(" "),s("p",[e._v("Once the RHEL operating system is installed on the worker nodes, perform the following steps on that node:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Log in to the RHEL host, register and attach the host pool with Red Hat by running the following command.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subscription-manager register\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Execute the following command to list the available subscriptions.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subscription-manager list --available --matches "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*OpenShift*'")]),e._v(" \n")])])])]),e._v(" "),s("li",[s("p",[e._v("In the output for the command in step 2, find the pool ID for Red Hat OpenShift Container Platform subscription and attach it.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subscription-manager attach --pool"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("pool_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Disable all repositories and enable only the repositories required by Red Hat OpenShift Container Platform 4.9.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("yum-config-manager --disable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("* \n\nsubscription-manager repos --disable"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\n--enable"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rhel-7-server-rpms"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\n--enable"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rhel-7-server-extras-rpms"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\n--enable"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rhel-7-server-ose-4.3-rpms"')]),e._v("\n")])])]),s("p",[e._v("After the RHEL 7.6 nodes are ready, refer to the section "),s("a",{attrs:{href:"../solution-deployment/ocp-worker-nodes#adding-rhel-7.6-worker-nodes"}},[e._v("RHEL 7.6 worker nodes")]),e._v(" in this document to add them to the OpenShift 4 cluster.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);