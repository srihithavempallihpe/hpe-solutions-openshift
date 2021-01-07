(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{492:function(e,t,s){"use strict";s.r(t);var a=s(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"physical-worker-node-labeling-in-red-hat-openshift-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#physical-worker-node-labeling-in-red-hat-openshift-cluster"}},[e._v("#")]),e._v(" Physical worker node labeling in Red Hat OpenShift cluster")]),e._v(" "),s("p",[e._v("This section describes the scripts to automate the process of retrieving the hardware properties from physical worker nodes of the Red Hat OpenShift cluster and using the Red Hat OpenShift Node Labeling capability to label the physical worker node with the retrieved properties. These node labels along with Red Hat OpenShift node selector capability can be used by the user for defining the pod deployment configuration in order to ensure pod is running on the physical node with desired hardware properties.")]),e._v(" "),s("p",[e._v("Nodes can be labelled for the following properties:")]),e._v(" "),s("ol",[s("li",[s("strong",[e._v("Overall Health Status of the node")]),e._v(' : If current status health status of following components  "BIOS, Fans, Temperature Sensors, Battery, Processor, Memory, Network and Storage" of the HPE Synergy compute is ok, physical node health status is considered "Ok" else "Degraded"')]),e._v(" "),s("li",[s("strong",[e._v("Overall Security Status of the node")]),e._v(' : If the current status of the following BIOS security configuration (which are important for the compute security) is as listed "secure boot status: enabled, asset tag: locked, UEFI Shell Script Verification: enabled, UEFI Shell Startup: disabled, Processor AES: enabled" then the overall security status of the physical node is considered "Ok" else "degraded".')]),e._v(" "),s("li",[s("strong",[e._v("Custom labeling")]),e._v(" : User defined labels (key, value) is assigned to desired physical worker node.")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Ansible engine with Ansible 2.9.x and Python 3.6.x")])]),e._v(" "),s("li",[s("p",[e._v("Red Hat OpenShift 4.x is up and running.")])]),e._v(" "),s("li",[s("p",[e._v('The RedHat OpenShift cluster must have physical worker node to use the "Node labeling" functionality.')])]),e._v(" "),s("li",[s("p",[e._v("The playbook under this repository needs to be run from Ansible Installer Machine with the Python virtual environment as non-root user.")])]),e._v(" "),s("li",[s("p",[e._v('Python module "proliantutils" is installed on the OpenShift Installer Machine.')]),e._v(" "),s("ul",[s("li",[s("p",[e._v('"proliantutils" is a set of utility libraries for interfacing and managing various components (like iLO) for HPE ProLiant Servers.')]),e._v(" "),s("ul",[s("li",[e._v("Use the following command to install proliantutils.")])])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\t$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ansible")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.9")]),e._v(".0\n")])])]),s("ul",[s("li",[e._v("Verify the version of proliantutils.")])])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("  $ pip freeze "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" proliantutils\n")])])]),s("ul",[s("li",[e._v("Output")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  $ proliantutils==2.9.2\n")])])]),s("ul",[s("li",[s("p",[e._v('Install the "sushy" python library. In case "sushy" module is already installed, please ensure its version is 3.0.0.')]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Use the following command to install sushy module.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ pip install sushy==3.0.0\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Verify the version of proliantutils.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ pip freeze | grep sushy\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ sushy==3.0.0\n")])])])])])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Refer to "),s("RouterLink",{attrs:{to:"/Solution-Deployment/Preparing-execution-environment.html#non-root-user-access"}},[e._v("Non-root user access")]),e._v(" section to know more about the non-root user details.")],1)]),e._v(" "),s("h3",{attrs:{id:"software-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[e._v("#")]),e._v(" Software requirements")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Software")]),e._v(" "),s("th",[e._v("Version")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("HPE OneView")]),e._v(" "),s("td",[e._v("5")])])])]),e._v(" "),s("h4",{attrs:{id:"input-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-files"}},[e._v("#")]),e._v(" Input files")]),e._v(" "),s("ul",[s("li",[e._v("Playbook for RedHat OpenShift Container Platform Physical Worker Node labeling are available under $BASE_DIR/platform/physical-physical-workerlabeling/")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("BASE_DIR is defined and set in "),s("RouterLink",{attrs:{to:"/Solution-Deployment/Preparing-execution-environment.html#installer-machine"}},[e._v("Installer machine")]),e._v(" section in deployment guide.")],1)]),e._v(" "),s("ul",[s("li",[s("p",[e._v("It is mandatory to update all the input files (hosts, secrets.yml, sysdig-agent-configmap.yaml) with appropriate values before running the playbook available in this repository.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Input file name")]),e._v(": hosts.json")]),e._v(" "),s("ol",[s("li",[e._v("This file is an inventory of host details.")]),e._v(" "),s("li",[e._v("This file contains sensitive information like iLO IP and credentials, Worker IP and labels. So, data inside this file is encrypted.")]),e._v(" "),s("li",[e._v('To edit this vault file, use the following command and provide the default "ansible vault" password.')])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ ansible-vault edit hosts.json\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("For each of the physical worker node that is part of RedHat OpenShift cluster, the user needs to provide the following information:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"host_fqdn": "replace_with_physical_worker_node1_fqdn",\n"ilo_ip": "replace_with_ilo_ip_of_physical_worker_node1",\n"username": "replace_with_ilo_username",\n"password": "replace_with_ilo_password",\n"custom_label_required": "replace_with_No_or_Yes",\n"label_name": "replace_with_desired_label_key",\n"label_val": "replace_with_desired_label_value"\n')])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v('Information inside hosts.json is available in a nested JSON format, which means user can add any number of physical worker node by creating the sections as "server 1, server 2, server 3, ...server N" and can also add any number of "custom labels" as "label 1, label 2, label 3 to label N". Refer to "hosts.json" to understand this nested JSON structure. "N" represent the Nth number server.')])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Input file name")]),e._v(": config.json")]),e._v(" "),s("ol",[s("li",[s("p",[e._v('Provide the path information about "kubeconfig" and "oc" command.')]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("kubeconfig_path:")]),e._v(' The value of this key is the path of kubeconfig and this path is used by "oc" command at runtime.')]),e._v(" "),s("li",[s("strong",[e._v("oc_command_path:")]),e._v(' The value of this key is the oc command path and this path is used to run the "oc" command.')])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"kubeconfig_path": "replace_with_path_of_ocp_kubeconfig",\n"oc_command_path": "replace_with_path_of_ocp_installation_dir"\n')])])])])])])]),e._v(" "),s("h4",{attrs:{id:"steps-to-run-the-node-labeling-automation-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-run-the-node-labeling-automation-scripts"}},[e._v("#")]),e._v(" Steps to run the Node Labeling automation scripts")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Execute the following commands from the Ansible installer VM in the python virtual environment as a non-root user. The python virtual environment is defined and set in the "),s("RouterLink",{attrs:{to:"/Solution-Deployment/Preparing-execution-environment.html#installer-machine"}},[e._v("Installer machine")]),e._v(" section.")],1),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ cd $BASE_DIR/platform/physical-workerlabelling/\n$ python physical_node_labeling.py\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("BASE_DIR is defined and set in "),s("RouterLink",{attrs:{to:"/Solution-Deployment/Preparing-execution-environment.html#installer-machine"}},[e._v("Installer machine")]),e._v(" section.")],1)])]),e._v(" "),s("li",[s("p",[e._v('Next, the user will be prompted to enter the Ansible vault password or key. This credential is the default "Ansible vault" password.')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ Enter key for encrypted variables:\n")])])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Default key value for Ansible vault is "),s("em",[e._v('"changeme"')]),e._v(".")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Output of the command will prompt following options.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ 1: Get the physical worker node details that user wishes to configure.\n\n$ 2: Get current health status of the physical worker node\n\n$ 3: Get security parameters of the physical worker node\n\n$ 4: Label the physical worker with health status\n\n$ 5: Label the physical worker with security status\n\n$ 6: Custom labels\n\n$ 7: Display current labels on the node\n\n$ 8: Quit\n\n$ Enter the choice number:\n​\n")])])])]),e._v(" "),s("li",[s("p",[e._v('Next, the user will be prompted to enter the Ansible vault password or key. This credential is the default "Ansible vault" password.')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ Enter key for encrypted variables:\n")])])])]),e._v(" "),s("li",[s("p",[e._v("If user selects option 1, then they will see all the information available within the hosts.json file")])]),e._v(" "),s("li",[s("p",[e._v("If user selects option 2, then aggregated health status of the physical worker nodes will be shown to the user as:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ {'worker1.newocs.twentynet.local': 'OK', 'worker2.newocs.twentynet.local': 'OK'}\n")])])])]),e._v(" "),s("li",[s("p",[e._v("If user selects option 3, then this playbook will show the aggregated security status of the physical worker node as:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v(" $ {'worker1.newocs.twentynet.local': 'OK', 'worker2.newocs.twentynet.local': 'Degraded'}\n")])])])]),e._v(" "),s("li",[s("p",[e._v('If user selects option 4, then the physical worker node will be labelled with its respective "aggregated health status" as given by option 2:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ worker1.newocs.twentynet.local\n  NAME                             STATUS   ROLES    AGE   VERSION   LABELS\n  worker1.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker1.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos\n Verified - Label  health=OK is added to the node worker1.newocs.twentynet.local\n \n worker2.newocs.twentynet.local\n NAME                             STATUS   ROLES    AGE   VERSION   LABELS\n worker2.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker2.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos,replace_with_desired_label_key=replace_with_desired_label_value,security=Degraded\n Verified - Label  health=OK is added to the node worker2.newocs.twentynet.local\n")])])])]),e._v(" "),s("li",[s("p",[e._v('If user selects option 5, then the physical worker node will be labelled with its respective "aggregated security status" as given by option 3:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ NAME                             STATUS   ROLES    AGE   VERSION   LABELS\nworker1.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker1.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos,security=OK\nVerified - Label  security=OK is added to the node worker1.newocs.twentynet.local\n\nNAME                             STATUS   ROLES    AGE   VERSION   LABELS\nworker2.newocs.twentynet.local   Ready    worker   64d   v1.17.1   app=sysdig-agent,beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,health=OK,kubernetes.io/arch=amd64,kubernetes.io/hostname=worker2.newocs.twentynet.local,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos,replace_with_desired_label_key=replace_with_desired_label_value,security=Degraded\nVerified - Label  security=Degraded is added to the node    worker2.newocs.twentynet.local\n")])])])]),e._v(" "),s("li",[s("p",[e._v("If user selects option 6, then the physical worker node will be labelled with the custom labels defined by user in the hosts.json file")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v('Custom labels will be applied on if user has selected "yes" or "no" in the json file for "custom_labels.')])])]),e._v(" "),s("li",[s("p",[e._v('"If user selects option 7, then all the labels like security, health and custom labels along with default labels for each of the physical worker node will be shown.')])]),e._v(" "),s("li",[s("p",[e._v("If user selects option 8, Node labeling utility will exit.")])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);