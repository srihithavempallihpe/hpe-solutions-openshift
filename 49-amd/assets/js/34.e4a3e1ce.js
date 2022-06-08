(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{546:function(e,t,a){"use strict";a.r(t);var s=a(54),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"red-hat-ocp-worker-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-ocp-worker-nodes"}},[e._v("#")]),e._v(" Red Hat OCP worker nodes")]),e._v(" "),a("p",[e._v("This section covers the steps to add RHCOS worker nodes to an existing OpenShift Container Platform 4.9 cluster.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("A Red Hat OpenShift Container Platform 4 cluster is available within the deployment environment.")])]),e._v(" "),a("li",[a("p",[e._v("A worker node ignition file is generated along with the bootstrap and master ignition files. Refer to the section "),a("a",{attrs:{href:"./Preparing-execution-environment#kubernetes-manifests-and-ignition-files"}},[e._v("Kubernetes manifests and ignition files")]),e._v(" in this document for details on generating manifest and ignition files.")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("It is important to use the "),a("em",[e._v("worker.ign")]),e._v(" ignition file generated along with the "),a("em",[e._v("master.ign")]),e._v(' file used to create the OpenShift cluster. If this is not the case, then "certificate signing requests" in OpenShift will not recognize these worker nodes.')])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("A working node is available that needs to be attached to the existing OpenShift cluster and used as the worker node.")])]),e._v(" "),a("h3",{attrs:{id:"procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure"}},[e._v("#")]),e._v(" Procedure")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Login to the installer VM as non-root user.")])]),e._v(" "),a("li",[a("p",[e._v("Execute the following command to get the nodes associated with the OpenShift cluster.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BASE_DIR")]),e._v("/installer/ignitions/auth/kubeconfig \n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BASE_DIR")]),e._v("/installer/library/openshift_components\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get nodes\n")])])]),a("p",[e._v("The output is as follows.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("NAME STATUS ROLES AGE VERSION\n\nmaster1.ocp.twentynet.local Ready master,worker 5d v1.14.6+888f9c630\n\nmaster2.ocp.twentynet.local Ready master,worker 5d v1.14.6+888f9c630\n\nmaster3.ocp.twentynet.local Ready master,worker 5d v1.14.6+888f9c630\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Since the worker node is booted with the existing worker ignition file, the node is recognized by the current OpenShift cluster. However, the certificate signing request is pending. Execute the following command to get the certificate signing requests.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get csr\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("The output is as follows.\n\nNAME AGE REQUESTOR CONDITION\n\ncsr-8pj6k 28m system:node:worker1.ocp.twentynet.local Pending\n\ncsr-9pj7c 28m system:node:worker2.ocp.twentynet.local Pending\n\ncsr-9pj1s 28m system:node:worker3.ocp.twentynet.local Pending\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Execute the following command to approve all of the pending certificate signing requests and to add the worker nodes to the cluster.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get csr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("awk")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{print $1}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" ./oc adm certificate approve "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Verify that the certificate signing requests for the worker nodes are approved using the following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get csr\n")])])]),a("p",[e._v("The output is as follows.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("NAME AGE REQUESTOR CONDITION\n\ncsr-8pj6k 28m system:node:worker1.ocp.twentynet.local Approved,Issued\n\ncsr-9pj7c 28m system:node:worker2.ocp.twentynet.local Approved,Issued\n\ncsr-9pj1s 28m system:node:worker3.ocp.twentynet.local Approved,Issued\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Verify that the worker nodes are added to the cluster using the following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get nodes\n")])])]),a("p",[e._v("The output is as follows.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("NAME STATUS ROLES AGE VERSION\n\nmaster1.ocp.twentynet.local Ready master,worker 5d v1.14.6+888f9c630\n\nmaster2.ocp.twentynet.local Ready master,worker 5d v1.14.6+888f9c630\n\nmaster3.ocp.twentynet.local Ready master,worker 5d v1.14.6+888f9c630\n\nworker1.ocp.twentynet.local Ready worker 5d v1.14.6+888f9c630\n\nworker2.ocp.twentynet.local Ready worker 5d v1.14.6+888f9c630\n\nworker3.ocp.twentynet.local Ready worker 5d v1.14.6+888f9c630\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Execute the following command to set the parameter "),a("em",[e._v("mastersSchedulable")]),e._v(" parameter as "),a("em",[e._v("false")]),e._v(", so that master nodes will not be used to schedule pods.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc edit scheduler\n")])])]),a("p",[e._v("The output is as follows.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" config.openshift.io/v1 \n\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Scheduler \n\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n   creationTimestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(' "2019'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("13T10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("34"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v('48Z" \n\n   generation'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2 \n\n   name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" cluster \n\n   resourceVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(' "1748652" \n\n   selfLink'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /apis/config.openshift.io/v1/schedulers/cluster \n\n   uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 30245db9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("1d94"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("11ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("8066"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("000c29c3ee8e \n\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n   mastersSchedulable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n\n   policy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n\n     name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(' "" \n\n '),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Execute the following command to verify the master roles have been reset.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get nodes\n")])])]),a("p",[e._v("The output is as follows.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("NAME STATUS ROLES AGE VERSION\n\nmaster1.ocp.twentynet.local Ready master 5d v1.14.6+888f9c630\n\nmaster2.ocp.twentynet.local Ready master 5d v1.14.6+888f9c630\n\nmaster3.ocp.twentynet.local Ready master 5d v1.14.6+888f9c630\n\nworker1.ocp.twentynet.local Ready worker 5d v1.14.6+888f9c630\n\nworker2.ocp.twentynet.local Ready worker 5d v1.14.6+888f9c630\n\nworker3.ocp.twentynet.local Ready worker 5d v1.14.6+888f9c630\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"adding-rhel-7-6-worker-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-rhel-7-6-worker-nodes"}},[e._v("#")]),e._v(" Adding RHEL 7.6 worker nodes")]),e._v(" "),a("p",[e._v("This section covers the steps to add RHEL 7.6 worker nodes to an existing Red Hat OpenShift Container Platform 4 cluster.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Ensure the required packages are installed and any necessary configuration is performed on the installer VM. Refer to the section "),a("RouterLink",{attrs:{to:"/Solution-Deployment/Preparing-execution-environment.html#installer-machine"}},[e._v("Installer machine")]),e._v(" of this document for details on the Prerequisites and configuration steps.")],1)]),e._v(" "),a("li",[a("p",[e._v("RHEL nodes are prepared for installation. Refer to the section "),a("a",{attrs:{href:"#adding-rhel-7.6-worker-nodes"}},[e._v("Adding RHEL 7.6 worker nodes")]),e._v(" of this document for details on preparing the RHEL 7.6 worker nodes.")])])])]),e._v(" "),a("h3",{attrs:{id:"procedure-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-2"}},[e._v("#")]),e._v(" Procedure")]),e._v(" "),a("p",[e._v("Perform the following steps on the installer VM:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download the Red Hat OpenShift Container Platform 4 Ansible package to enable the addition of RHEL 7.6 worker nodes to an existing OpenShift cluster.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" openshift-ansible openshift-clients jq\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Create an Ansible inventory file exclusively for adding RHEL worker nodes that is named path/inventory/hosts* that defines your compute machine nodes and required variables as listed.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("vars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Username that runs the Ansible tasks on the remote compute machines")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ansible_user=root")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If you do not specify root for the ansible_user,")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# you must set ansible_become to True and assign the user sudo permissions.")]),e._v("\n\n    ansible_become=True\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Path to the kubeconfig file for your cluster")]),e._v('\n\n    openshift_kubeconfig_path="~/.kube/config"\n\n    '),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# FQDN of each RHEL machine to add to the cluster")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("new_workers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n    worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("0.example.com\n\n    worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("1.example.com\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Execute the following commands to run the playbook which adds RHEL 7.6 worker nodes to the existing cluster.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /usr/share/ansible/openshift-ansible\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ansible-playbook -i path to inventory hosts "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" playbooks/scaleup.yml\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"approving-the-certificate-signing-requests-for-your-machines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approving-the-certificate-signing-requests-for-your-machines"}},[e._v("#")]),e._v(" Approving the certificate signing requests for your machines")]),e._v(" "),a("p",[e._v("When new machines are added to the cluster, pending certificate signing requests (CSRs) are generated for each machine that is added. Confirm these CSRs are approved. You can also approve the CSR if necessary.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("jq package is installed.")])])]),e._v(" "),a("h3",{attrs:{id:"procedure-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedure-3"}},[e._v("#")]),e._v(" Procedure")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Confirm that the cluster recognizes the machines by executing the following command. The output lists all of the machines that have been created.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get nodes\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("NAME STATUS ROLES AGE VERSION\n\nmaster-0 Ready master 63m v1.14.6+c4799753c\n\nmaster-1 Ready master 63m v1.14.6+c4799753c\n\nmaster-2 Ready master 64m v1.14.6+c4799753c\n\nworker-0 NotReady worker 76s v1.14.6+c4799753c\n\nworker-1 NotReady worker 70s v1.14.6+c4799753c\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Review the pending CSRs and ensure that there is a client and server request with Pending or Approved status for each machine added to the cluster.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get csr\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("NAME AGE REQUESTOR CONDITION\n\ncsr-8b2br 15m system:serviceaccount:openshift-machine-config-operator:node-bootstrapper Pending\n\ncsr-8vnps 15m system:serviceaccount:openshift-machine-config-operator:node-bootstrapper Pending\n\ncsr-bfd72 5m26s system:node:ip-10-0-50-126.us-east-2.compute.internal Pending\n\ncsr-c57lv 5m26s system:node:ip-10-0-95-157.us-east-2.compute.internal Pending\n")])])]),a("p",[e._v("Since the CSRs rotate automatically, it is important to approve the CSRs within an hour of adding the machines to the cluster. If the CSRs are not approved within an hour, the certificates will rotate, and more than two certificates will be present for each node. All certificates must be approved. After the initial CSRs are approved, the subsequent node client CSRs are automatically approved by the cluster kube-controller-manager.")]),e._v(" "),a("p",[e._v("To approve CSRs individually, run the following command for each valid CSR. In this example <csr_name> is the name of a CSR from the list of current CSRs.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc adm certificate approve csr_name\n")])])]),a("p",[e._v("If all CSRs are valid, approve all of them by running the following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc get csr -ojson "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq -r "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.items\\[\\] | select(.status == {} ) | .metadata.name'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("xargs")]),e._v(" oc adm certificate approve\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);