(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{495:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bootstrap-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-node"}},[t._v("#")]),t._v(" Bootstrap node")]),t._v(" "),a("p",[t._v("A temporary bootstrap node is required for OpenShift cluster creation. This section assumes that a VMware vSphere host is present within the deployment environment and is associated with a VMware vCenter server. The host should be configured with appropriate storage and networking configuration.")]),t._v(" "),a("h3",{attrs:{id:"playbooks-for-creating-the-bootstrap-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#playbooks-for-creating-the-bootstrap-node"}},[t._v("#")]),t._v(" Playbooks for creating the bootstrap node")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("inputs.yml")]),t._v(": This file contains input variables to create the bootstrap VM. Some of the variables pertaining to the VM configuration are provided with default values as per the Red Hat guidelines. It is expected that the installation user updates the values to suit their installation environment.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("datacenter_name")]),t._v(": Name of the VMware data center.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("cluster_name")]),t._v(": Name of the VMware cluster.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("datastore_name")]),t._v(": Name of the VMware datastore.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("network_name")]),t._v(": Name of the network associated with the vSphere host.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("bootstrap_disk")]),t._v(": Disk size for the bootstrap node.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("bootstrap_cpu")]),t._v(": Number of vCPUs for the bootstrap node.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("bootstrap_name")]),t._v(": Custom name of the bootstrap node.")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("secret.yml")]),t._v(": This is an Ansible vault file that contains sensitive information such as the VMware vCenter server IP address and credentials.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("playbooks/deploy_vm.yml")]),t._v(": This playbook is used to create the bootstrap VM.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("roles/deploy_vm.yml")]),t._v(": This is the Ansible role file that is required to create the bootstrap VM. Each role is associated with a set of tasks to accomplish the expected output and they are present in the tasks directory within the role.")])])]),t._v(" "),a("p",[t._v("Follow these steps to create the bootstrap node:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Login to the installer VM.")])]),t._v(" "),a("li",[a("p",[t._v("Use the following command to change the directory.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/hpe/solutions/ocp/hpe-solutions-openshift/DL/scalable/infrastructure\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Update the secret.yml to provide the details of the VMware vCenter server using the following command. A sample input is provided and it is expected that the installation user updates the configuration to suit the deployment environment.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-vault edit secret.yml\n")])])]),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vcenter hostname/ip address and credentials")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter_hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <vcenter hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(";\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter_username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <vcenter username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(";\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vcenter_password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <vcenter password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(";\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Update the "),a("em",[t._v("input.yml")]),t._v(" file with the data center, cluster, and datastore information that will be used within the VMware vCenter server. This file provides default configuration information for the bootstrap node, if required. The configuration can be updated to suit the environment needs.")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Variables for creating the bootstrap VM, as per the vSphere host configuration within the vCenter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datacenter_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of data center within vcenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(";\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of cluster within vcenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(";\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datastore_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of datastore within vcenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(";\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of the network within vcenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(";\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default values for creating the bootstrap VM")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bootstrap_disk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bootstrap_cpu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bootstrap_memory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16400")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bootstrap_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bootstrap\n")])])])]),t._v(" "),a("li",[a("p",[t._v("After the "),a("em",[t._v("input.yml")]),t._v(" and "),a("em",[t._v("secret.yml")]),t._v(" files are updated with appropriate values, execute the playbook with the following command to create the bootstrap VM.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ansible-playbook –i hosts playbooks/deploy_vm.yml –ask-vault-pass\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("It is essential that all the nodes within the deployment environment are synchronized for time using an NTP server. Failure to do so will result in an installation failure due to mismatche in certificates or other files with time dependencies.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);