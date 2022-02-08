(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{439:function(e,a,s){e.exports=s.p+"assets/img/figure87.795c8d22.png"},440:function(e,a,s){e.exports=s.p+"assets/img/figure88.90753e6d.png"},441:function(e,a,s){e.exports=s.p+"assets/img/figure89.c116e750.png"},442:function(e,a,s){e.exports=s.p+"assets/img/figure90.4bc242dd.png"},443:function(e,a,s){e.exports=s.p+"assets/img/figure91.12646766.png"},524:function(e,a,s){"use strict";s.r(a);var t=s(54),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"install-and-configure-velero"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-velero"}},[e._v("#")]),e._v(" Install and Configure Velero")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Velero is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources and persistent volumes. It works both on premises and in a public cloud.\nVelero consists of a server process running as a deployment in your Kubernetes cluster and a command-line interface (CLI) with which DevOps teams and platform operators configure scheduled backups, trigger ad-hoc backups, perform restores, and more.")]),e._v(" "),t("p",[e._v("Unlike other tools which directly access the Kubernetes etcd database to perform backups and restores, Velero uses the Kubernetes API to capture the state of cluster resources and to restore them when necessary. This API-driven approach has a number of key benefits:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Backups can capture subsets of the cluster's resources, filtering by namespace, resource type, and/or label selector, providing a high degree of flexibility around what's backed up and restored.")])]),e._v(" "),t("li",[t("p",[e._v("Users of managed Kubernetes offerings often do not have access to the underlying etcd database, so direct backups/restores of it are not possible.")])]),e._v(" "),t("li",[t("p",[e._v("Resources exposed through aggregated API servers can easily be backed up and restored even if they're stored in a separate etcd database")])])]),e._v(" "),t("p",[e._v("Velero provides a suite of tools to backup Kubernetes resources and applications for two main purposes:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Disaster Recovery")]),e._v(" -- Recover Kubernetes cluster components and applications.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Migration")]),e._v(" -- Migrate your Kubernetes applications to another Kubernetes cluster.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Data Protection")]),e._v(" - Offers key data protection features such as scheduled backups, retention schedules, and pre or post-backup hooks for custom actions.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(439),alt:""}})])])]),e._v(" "),t("p",[t("strong",[e._v("Figure 25")]),e._v(". Installing and Configure Velero High Level View")]),e._v(" "),t("p",[e._v("Velero lets you:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Take backups of your cluster and restore in case of loss.")])]),e._v(" "),t("li",[t("p",[e._v("Migrate cluster resources to other clusters.")])]),e._v(" "),t("li",[t("p",[e._v("Replicate your production cluster to development and testing\nclusters.")])])]),e._v(" "),t("p",[e._v("Velero consists of:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("A server that runs on your cluster")])]),e._v(" "),t("li",[t("p",[e._v("A command-line client that runs locally")])])]),e._v(" "),t("p",[e._v("This section covers how to install and configure Velero and how to use Velero to take backup/restore on an Openshift Container Platform by using noobaa object storage.")]),e._v(" "),t("h2",{attrs:{id:"flow-diagram"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-diagram"}},[e._v("#")]),e._v(" Flow Diagram")]),e._v(" "),t("p",[t("img",{attrs:{src:s(440),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("Figure 26")]),e._v(". Installing and Configuring Velero Solution Flow Diagram")]),e._v(" "),t("h2",{attrs:{id:"pre-requisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-requisites")]),e._v(" "),t("p",[e._v("OpenShift Container Platform cluster should be available with the administrator credentials")]),e._v(" "),t("p",[e._v("OCP cluster should have noobaa object storage as part of Openshift Storage cluster")]),e._v(" "),t("h2",{attrs:{id:"installation-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-process"}},[e._v("#")]),e._v(" Installation Process")]),e._v(" "),t("p",[t("strong",[e._v("Follow below steps to retrieve Nooba information.")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Login to the ocp cluster and describe the noobaa pod to get the external DNS")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc describe noobaa -n openshift-storage\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Get the noobaa access ID & KEY by running bellow command")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get secret noobaa-admin -n openshift-storage -o json "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.data|map_values(@base64d)'")]),e._v("\n")])])]),t("p",[t("img",{attrs:{src:s(441),alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Once we have noobaa information, create credential file in cluster as shown below:")]),e._v(" "),t("p",[e._v("Create file by running following command  "),t("code",[e._v("bash vi velero.credentials")]),e._v(" Add content into the file as mentioned below:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\naws_access_key_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3vTNl90sOpX654VdQYQm"')]),e._v("\n\naws_secret_access_key "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"L0q2juZc647ySGRTHNzalmA2qKXK+fdkHV"')]),e._v("\n")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Follow below steps to configure Velero with Nooba storage.")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create a separate directory for Velero configuration and switch into that directory.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" --p ~/Velero\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/Velero\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Download and install Velero client by using below steps")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v("\nhttps://github.com/vmware-tanzu/velero/releases/download/v1.5.1/velero-v1.5.1-linux-amd64.tar.gz\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" zxf velero-v1.5.1-linux-amd64.tar.gz\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" velero-v1.5.1-linux-amd64/Velero /usr/local/bin/\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf velero*\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Generate a certificate using the below command.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" openssl s_client -showcerts "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\n  -servername s3-openshift-storage.apps.dev01.twentynet.local "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\n  -connect s3-openshift-storage.apps.dev01.twentynet.local:443\n\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" openssl x509 -inform pem "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /tmp/noobaa.crt\n")])])])]),e._v(" "),t("li",[t("p",[e._v("To configure Velero server by using noobaa storage run the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> velero install \\\n\n--provider aws \\\n\n--plugins velero/velero-plugin-for-aws:v1.1.0 \\\n\n--bucket velerobucket1 \\\n\n--secret-file ./noobaa.credentials \\\n\n--use-volume-snapshots=false --use-restic --default-volumes-to-restic\\\n\n--backup-location-config\nregion=noobaa,s3ForcePathStyle=true,s3Url=https://s3-openshift-storage.apps.dev0.twentynet.local\\\n\n--cacert=/tmp/noobaa.crt\n")])])]),t("p",[e._v("Output of the above command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ClusterRoleBinding/velero: already exists, proceeding\n\nClusterRoleBinding/velero: created\n\nServiceAccount/velero: attempting to create resource\n\nServiceAccount/velero: created\n\nSecret/cloud-credentials: attempting to create resource\n\nSecret/cloud-credentials: created\n\nBackupStorageLocation/default: attempting to create resource\n\nBackupStorageLocation/default: created\n\nDeployment/velero: attempting to create resource\n\nDeployment/velero: created\n\nVelero is installed! Use 'kubectl logs deployment/velero -n velero' to view the status.\n")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Enable Velero Pods")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Execute the below commands for creating velero pods.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc adm policy add-scc-to-user privileged -z velero -n velero\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" oc patch ds/restic --namespace velero --type json -p "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'[{"op":"add","path":"/spec/template/spec/containers/0/securityContext","value": { "privileged": true}}]\'')]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Velero pods should be Running and use the below command to check velero pods status.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v(" oc get pods --n velero\n")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Follow below steps for backup and restore.")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Below figure shows wordpress app resources under project wordpress")]),e._v(" "),t("p",[t("img",{attrs:{src:s(442),alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Run the following command to take backup")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" velero backup create wpbackup --include-namespaces wordpress\n")])])]),t("p",[e._v("Output of the above command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Backup request "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my-backup"')]),e._v(" submitted successfully.\n\nRun "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("velero backup describe wpbackup"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" or "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("velero backup logs wpbackup"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" details.\n")])])])]),e._v(" "),t("li",[t("p",[e._v("After few seconds, run the below command to check the backup status.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" velero backup describe wpbackup\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run below command to get available backups in Velero.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" velero backup get\n")])])]),t("p",[e._v("Output of the above command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("NAME STATUS ERRORS WARNINGS CREATED EXPIRES STORAGE LOCATION SELECTOR\n\nwpbackup Completed "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-09-29 "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":38:36 +0200 CEST 29d default "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run the below command to restore the backup in Velero.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" velero restore create --from-backup wpbackup\n")])])]),t("p",[e._v("Output of the above command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Restore request "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wpbackup-20200930065552"')]),e._v(" submitted successfully.\n\nRun "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("velero restore describe wpbackup-20200930065552"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" or "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("velero restore log wpbackup-20200930065552"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" details.\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run the below command to list the restore.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" velero restore get\n")])])]),t("p",[e._v("Output of the above command.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("NAME BACKUP STATUS STARTED COMPLETED ERRORS WARNINGS CREATED SELECTOR\n\nwpbackup-20200930065552 wpbackup Completed "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-09-30 06:55:51 +0200 CEST "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-09-30 06:55:53 +0200 CEST "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-09-30 06:55:52 +0200 CEST "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),t("p",[e._v("Verify wordpress resources got restored or not.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(443),alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);