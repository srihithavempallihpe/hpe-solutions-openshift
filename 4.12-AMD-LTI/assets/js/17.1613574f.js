(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{212:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("ul",[s("li",[t._v("RedHat Enterprise Linux8.6 must be "),s("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/performing_a_standard_rhel_8_installation/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("installed and registered"),s("OutboundLink")],1),t._v(" on your host machine")]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("This section assumes the following considerations for our deployment environment:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("RHEL 8.6 installer machine must have the following configurations:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("Host OS disk – raid1 for redundancy")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("Create and delete logical drives on the head nodes following below steps.")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),s("p",[t._v("To delete all the existing logical drives in the server in case if any and to create new logical drives named 'RHEL Boot Volume' in respective ILO servers run the site.yml playbook inside create_delete_logicaldrives directory with the below mentioned command")]),t._v(" "),t._m(27),s("p",[t._v("We can provide the input variables in any one of the below methods")]),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("Through the input.py, go to the directory /opt/hpe-solutions-openshift/DL-LTI-Openshift/ and run the below command.")]),t._v(" "),t._m(29),s("p",[t._v("Here it will prompt for values which are not obtained from SCID json files.")]),t._v(" "),s("p",[t._v("A sample input collection through input.py is as follows.")]),t._v(" "),t._m(30),s("p",[t._v("After execution of input.py, it will generate input.yaml and hosts file in the same location.")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),s("p",[t._v("Run the following commands on the installer VM to edit the vault to match the installation environment.")]),t._v(" "),t._m(35),t._m(36),t._v(" "),s("p",[t._v("A sample input.yaml file is as follows with a few filled parameters.")]),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39)])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"preparing-the-execution-environment-for-rhocp-worker3-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-execution-environment-for-rhocp-worker3-node"}},[this._v("#")]),this._v(" Preparing the execution environment for RHOCP worker3 node")])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Prerequisites:")])])},function(){var t=this._self._c;return t("li",[this._v("Configure "),t("strong",[this._v("BOND > VLAN > Bridge")])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Setting up RHEL 8.6 installer machine")])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("A server running Red Hat Enterprise Linux (RHEL) 8.6 exists within the deployment environment and is accessible to the installation user to be used as an installer machine. This server must have internet connectivity.")]),this._v(" "),t("li",[this._v("A virtual machine is used to act as an installer machine and the same host is utilized as an Ansible Engine host. We are using one of the worker3 machines as an installer machine to execute Ansible Playbook.")])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Prerequisites to execute ansible playbook:")])])},function(){var t=this._self._c;return t("ol",[t("li",[this._v('The installer machine must have at least 500 GB disk space (especially in the "/" partition), 4 CPU cores and 16 GB RAM.')]),this._v(" "),t("li",[this._v("RHEL 8.6 installer machine must be subscribed with valid Red Hat credentials. To register the installer machine for the Red Hat subscription, run the following command:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" subscription-manager register "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --auto-attach \n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Sync time with NTP server.")]),this._v(" "),t("li",[this._v("SSH key pair must be available on the installer machine. If the SSH key is not available, generate a new SSH key pair with the following command:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ ssh-keygen \n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("To set up the installer machine:")])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"5"}},[t("li",[this._v("Create and activate a Python3 virtual environment for deploying this solution with the following commands:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python3 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" venv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("virtual_environment_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("virtual_environment_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/bin/activate \n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("Download the OpenShift repositories using the following commands in the Ansible Engine:")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /opt \n\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt \n\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" \n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com/HewlettPackard/hpe-solutions-openshift.git"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"7"}},[t("li",[this._v("Setup the installer machine to configure the nginx, development tools, and other python packages required for LTI installation. Navigate to the $BASE_DIR directory and run the following command:")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("cd")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$BASE_DIR")]),this._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("sh")]),this._v(" setup.sh \n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),t("p",[this._v("$BASE_DIR refers to "),t("strong",[this._v("/opt/hpe-solutions-openshift/DL-LTI-Openshift/")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"8"}},[t("li",[t("p",[this._v("As part of setup.sh script it will create nginx service, so user must download and copy Rhel 8.6 DVD ISO to "),t("strong",[this._v("/usr/share/nginx/html/")])])]),this._v(" "),t("li",[t("p",[this._v("Minimum Storage requirement for management servers")])])])},function(){var t=this,s=t._self._c;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Management Servers")])]),t._v(" "),s("th",[s("strong",[t._v("Host OS disk")])]),t._v(" "),s("th",[s("strong",[t._v("Storage Pool disk")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Server 1")]),t._v(" "),s("td",[t._v("2 x 960GB")]),t._v(" "),s("td",[t._v("1 TB")])]),t._v(" "),s("tr",[s("td",[t._v("Server 2")]),t._v(" "),s("td",[t._v("2 x 960GB")]),t._v(" "),s("td",[t._v("1 TB")])]),t._v(" "),s("tr",[s("td",[t._v("Server 3")]),t._v(" "),s("td",[t._v("2 x 960GB")]),t._v(" "),s("td",[t._v("1 TB")])])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"10"}},[t("li",[t("strong",[this._v("Creating and deleting logical drives")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Input File Update:-")])])},function(){var t=this._self._c;return t("ol",[t("li",[t("p",[this._v("User has to update the input.yaml file in $BASE_DIR/create_delete_logicaldrives directory to execute the logical drive script.")])]),this._v(" "),t("li",[t("p",[this._v("User needs to update all the details in the input.yaml file which include:-")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n\t\tILOServers:\n\n\t\t\t- ILOIP: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*\n\n\t\t\t\tILOuser: admin\n\n\t\t\t\tILOPassword: Password\n\n\t\t\t\tcontroller: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("  \n\n\t\t\t\tRAID: Raid1\n\n\t\t\t\tPhysicalDrives: 1I:1:1,1I:1:2  \n\n\t\t\t- ILOIP: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*\n\n\t\t\t\tILOuser: admin\n\n\t\t\t\tILOPassword: Password\n\n\t\t\t\tcontroller: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\t\t\t\tRAID: Raid1\n\n\t\t\t\tPhysicalDrives: 1I:3:1,1I:3:2\n\n\t\t\t- ILOIP: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*\n\n\t\t\t\tILOuser: admin\n\n\t\t\t\tILOPassword: Password\n\n\t\t\t\tcontroller: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n\n\t\t\t\tRAID: Raid1\n\n\t\t\t\tPhysicalDrives: 1I:3:1,1I:3:2   \n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Note:-")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". To "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" controller "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" login to the respective ILO -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" System Information -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Storage tab where inside Location "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" the **slot number** as the controller id. \n\n\t\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example - Slot = 12 ")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". To "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" the PhysicalDrives login to the respective ILO -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" System Information -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Storage tab inside Unconfigured Drives where under Location you can deduce PhysicalDrives based on these information:\n\n\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Slot: 12:Port=1I:Box=1:Bay=1")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example - 1I:1:1 ('Port:Box:Bay')")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Slot: 12:Port=1I:Box=1:Bay=2")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example - 1I:1:2 ('Port:Box:Bay') ")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Playbook Execution:-")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("\t$ ansible-playbook site.yml --ask-vault-pass\n")])])])},function(){var t=this._self._c;return t("p",[this._v("Method 1. "),t("strong",[this._v("Input.py : Automation way of taking input")])])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("   python input.py\n")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\tEnter server serial number "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the first "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Example: 2M2210020X "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t2M205107TH\n\tEnter ILO address "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the first "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Example: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.28")]),t._v(".201.5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".201.13\n\tEnter ILO username "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the first "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Example: admin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tadmin\n\tEnter ILO password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the first "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Example: Password "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tPassword\n\tEnter Host FQDN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the first "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Example: kvm1.xyz.local "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\theadnode1.isv.local\n\tetc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".'\n")])])])},function(){var t=this._self._c;return t("p",[this._v("Method 2. "),t("strong",[this._v("Input.yaml: Manually editing input file")])])},function(){var t=this._self._c;return t("p",[this._v("Go to the directory $BASE_DIR("),t("strong",[this._v("/opt/hpe-solutions-openshift/DL-LTI-Openshift/")]),this._v("), here we will have input.yaml and hosts files.")])},function(){var t=this._self._c;return t("ol",[t("li",[this._v("A preconfigured Ansible vault file (input.yaml) is provided as a part of this solution, which consists of sensitive information to support the host and virtual machine deployment.")])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cd $BASE_DIR\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("ansible-vault edit input.yaml\n")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),t("p",[this._v("The default password for the Ansible vault file is "),t("strong",[this._v("changeme")])]),this._v(" "),t("p",[this._v("Sample input_sample.yml can be found in the $BASE_DIR along with description of each input variable.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(" - Server_serial_number: 2M20510XXX\n   ILO_Address: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*\n   ILO_Username: admin\n   ILO_Password: *****\n   Hostname: headnode3.XX.XX                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ex. headnode3.isv.local")]),t._v("\n   Host_Username: root\n   Host_Password: ******\n   HWADDR1: XX:XX:XX:XX:XX:XX             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#mac address for server physical interface1 ")]),t._v("\n   HWADDR2: XX:XX:XX:XX:XX:XX             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#mac address for server physical interface2")]),t._v("\n   Host_OS_disk: sda\n   Host_VlanID: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("230")]),t._v("\n   Host_IP: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*\n   Host_Netmask: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v(".*.*.*\n   Host_Prefix: XX                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ex. 8,24,32")]),t._v("\n   Host_Gateway: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*\n   Host_DNS: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*\n   Host_Domain: XX.XX                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ex. isv.local")]),t._v("\n   corporate_proxy: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.28")]),t._v(".*.*              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#provide corporate proxy, ex. proxy.houston.hpecorp.net")]),t._v("\n   corporate_proxy_port: XX               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#corporate proxy port no, ex. 8080")]),t._v("\n\nconfig:\n   HTTP_server_base_url: http://172.28.*.*/  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Installer IP address")]),t._v("\n   HTTP_file_path: /usr/share/nginx/html/    \n   OS_type: rhel8\n   OS_image_name: rhel-8.6-x86_64-dvd.iso    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ISO image should be present in /usr/share/nginx/html/")]),t._v("\n   base_kickstart_filepath: /opt/hpe-solutions-openshift/DL-LTI-Openshift/playbooks/roles/rhel8_os_deployment/tasks/ks_rhel8.cfg\n\n")])])])},function(){var t=this._self._c;return t("p",[this._v("A sample "),t("strong",[this._v("hosts")]),this._v(" files is as follows")])},function(){var t=this._self._c;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("\t\t   "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'[kvm_nodes]\n\t\t\t172.28.*.*\n\t\t\t172.28.*.*\n\t\t\t172.28.*.*\n\n\t\t\t[ansible_host]\n\t\t\t172.28.*.*\n\n\t\t\t[rhel8_installerVM]\n\t\t\t172.28.*.*\n\n\t\t\t[binddns_masters]\n\t\t\t172.28.*.*\n\n\t\t\t[binddns_slaves]\n\t\t\t172.28.*.*\n\t\t\t172.28.*.*\n\n\t\t\t[masters_info]\n\t\t\tmaster1 ip=172.28.*.* hostname=headnode1\n\n\t\t\t[slaves_info]\n\t\t\tslave1 ip=172.28.*.* hostname=headnode2\n\t\t\tslave2 ip=172.28.*.* hostname=headnode3'")]),this._v("\n")])])])}],!1,null,null,null);s.default=a.exports}}]);