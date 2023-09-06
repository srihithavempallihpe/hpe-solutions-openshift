(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{194:function(t,e,n){t.exports=n.p+"assets/img/Aspose.Words.d1fc7ddd-52aa-4c6c-b4c8-7a1fb8d3e951.009.6aaa8b17.png"},213:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("h1",{attrs:{id:"solution-deployment-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-deployment-workflow"}},[this._v("#")]),this._v(" "),t("strong",[this._v("SOLUTION DEPLOYMENT WORKFLOW")])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:n(194),alt:""}})])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("FIGURE 7.")]),this._v(" End to End Solution Deployment Workflow")])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("For clusters with installer-provisioned infrastructure, you delegate the infrastructure bootstrapping and provisioning to the installation program instead of doing it yourself. The installation program creates all of the networking, machines, and operating systems that are required to support the cluster.")]),this._v(" "),t("li",[this._v("If you provision and manage the infrastructure for your cluster, you must provide all of the cluster infrastructure and resources, including the bootstrap machine, networking, load balancing, storage, and individual cluster machines.")])])},function(){var t=this._self._c;return t("ol",[t("li",[t("strong",[this._v("Set up iPXE, TFTP, and DHCP for RHCOS")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[this._v("Configure a load balancer for RHOCP 4 nodes")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[this._v("Configure BindDNS")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[this._v("Configure firewall ports")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"5"}},[t("li",[t("strong",[this._v("Start RHOCP 4 User-Provisioned Infrastructure setup")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"6"}},[t("li",[t("strong",[this._v("Download RHOCP 4 software version and images")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"7"}},[t("li",[t("strong",[this._v("Create ignition config files")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"8"}},[t("li",[t("strong",[this._v("Upload ignition config files to the web")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"9"}},[t("li",[t("strong",[this._v("Deploy bootstrap node")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"10"}},[t("li",[t("strong",[this._v("Deploy master node")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"11"}},[t("li",[t("strong",[this._v("Create the cluster")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"12"}},[t("li",[t("strong",[this._v("Log in to the cluster")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"13"}},[t("li",[t("strong",[this._v("Configure operators")])])])},function(){var t=this._self._c;return t("ol",{attrs:{start:"14"}},[t("li",[t("strong",[this._v("Add Worker nodes")])])])}],i=n(0),r=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("The following figure shows the high-level workflow of the installation process:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("The following steps provide an overview of each step that needs to be performed for deploying the HPE ProLiant NGS-optimized solution for Red Hat OpenShift Container Platform 4.12:")]),t._v(" "),e("p",[t._v("The way you interact with the installation program differs depending on your installation type.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("In this step, the iPXE server is leveraged to boot the machine. The iPXE and TFTP server is set up to boot RHCOS. The PXE boot process is the initial stage for deploying the solution and configuring DHCP is an integral part of this process. This configuration can be done using the sudo access.")]),t._v(" "),e("p",[t._v("For more information on configuring the iPXE set up, see the "),e("a",{attrs:{href:"https://github.com/HewlettPackard/hpe-solutions-openshift/blob/master/DL-LTI-Openshift/playbooks/deploy_ipxe_ocp.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deploy iPXE guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("In the multi-node RHOCP cluster deployment, the load balancer is mandatory. For this solution, Hewlett Packard Enterprise has leveraged the required traffic for HAProxy load balancing. This configuration can be done using the sudo access. For commercial load balancer such as F5 Big-IP or any other RHOCP 4 supported load balancer, visit the manufacture website.")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("In the User-Provisioned Infrastructure (UPI), DNS records are required for each machine. These records resolve the hostnames for all other machines in a RHOCP cluster. This component can also be configured using the sudo access for Linux-based DNS solution. It provides details on configuring the sudo to allow non-root users to execute root level commands.")]),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("In the User-Provisioned Infrastructure (UPI), the network connectivity between machines allows cluster components to communicate within the RHOCP cluster. Hence, the required ports must be open between RHOCP cluster nodes. This component can also be configured using the sudo access for Linux-based firewall. For third-party firewall solutions, visit the manufacture website. It provides details on configuring the sudo to allow non-root users to execute root level commands.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal-network-customizations.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installing a user-provisioned bare metal cluster with network customizations"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal-network-customizations.html#installation-network-user-infra_installing-bare-metal-network-customizations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Networking requirements for user-provisioned infrastructure"),e("OutboundLink")],1),t._v(" sections in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")]),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("The User-Provisioned Infrastructure (UPI) begins with installing a bastion host. This setup uses RHEL 8.6 virtual machine as a bastion host. This bastion host is used for deployment and management of the RHOCP 4 clusters. The setup and configuration of this step can be completed using the sudo user access.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal.html#ssh-agent-using_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generating a key pair for cluster node SSH access"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("To download the RHOCP 4 image, see the "),e("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/x86_64/dependencies/rhcos/4.12/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RHCOS image mirror"),e("OutboundLink")],1),t._v(" page. Check the access token for your cluster and install it on the bastion host. The bastion host is used for deploying and managing the RHOCP 4 clusters. The setup and configuration of this step can be completed using the sudo user access.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal.html#installation-obtaining-installer_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Obtaining the installation program"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("This step begins with the creation of the install-config.yaml in a new folder. Use the Red Hat OpenShift installer tool to convert the YAML file to the ignition config file, which is required to install the RHOCP 4. During this process, system modification is not done on the bastion host or the provisioning server. This setup can be completed using the sudo access.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal.html#installation-initializing-manual_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manually creating the installation configuration file"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("In this step, the ignition config files are uploaded to an internal website that allows anonymous access to the iPXE boot process. Update the iPXE default file to point to the website location of the ignition file. The action required in this step can be done using the sudo user.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal.html#installation-user-infra-machines-pxe_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installing RHCOS by using PXE or iPXE booting"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("KVM is an open-source virtualization technology that converts your Linux machine into a type-1 bare-metal hypervisor and allows you to run multiple Virtual Machines (VMs) or guest VMs on Red Hat Linux.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/getting-started-with-virtualization-in-rhel-8_configuring-and-managing-virtualization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting started with virtualization"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("Red Hat Enterprise Linux 8 documentation")]),t._v(".")])]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("The bootstrap node is a temporary node that is used to bring up the RHOCP cluster. After the cluster is up, this machine can be decommissioned, and the hardware can be reused. The iPXE boot process must use bootstrapping information as a part of the iPXE boot parameter to install the RHCOS on this node.")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("The master node uses the iPXE image for RHCOS after the bootstrap node. The iPXE boot process must use the master.ign information as a part of the iPXE boot parameter to install the RHCOS on this node. The root user is not active by default in RHCOS. Since the root login is not available, log in as the core user.")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("The four nodes, one bootstrap and three master nodes boot up and are available at the login prompt for RHCOS. To complete the bootstrap process, log in as a sudo user on the bastion host or provision server and use the Red Hat OpenShift installer tool.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal.html#installation-installing-bare-metal_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Waiting for the bootstrap process to complete"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("After the bootstrap process has completed successfully, login to the cluster. The kubeconfig file is present in the auth directory where the ignition files are created on the bastion host. Export the cluster kubeconfig file and log in to your cluster as a default system user. The kubeconfig file contains information about the cluster that is used by the CLI to connect a client to the correct cluster and API server. This file is specific to a cluster and is created during the RHOCP installation. After logging in, approve the pending Certificate Signing Requests (CSRs) for the nodes.")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal.html#installation-approve-csrs_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Approving the certificate signing requests for your machines"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")]),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("After the control plane initializes, you must immediately configure operators that are not available. It ensures their availability (for example, image-registry).")]),t._v(" "),e("p",[t._v("For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/installing/installing_bare_metal/installing-bare-metal.html#installation-registry-storage-config_installing-bare-metal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Image registry storage configuration"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(". To complete this step, you can also log in as a sudo user on the bastion host or provision server.")]),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("In the RHOCP, you can add RHEL worker nodes to a User-Provisioned Infrastructure cluster or an installation-provisioned infrastructure cluster on the x86_64 architecture. For more information, see the "),e("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.12/machine_management/adding-rhel-compute.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding RHEL compute machines to an OpenShift Container Platform cluster"),e("OutboundLink")],1),t._v(" section in the "),e("em",[t._v("OpenShift Container Platform 4.12 documentation")]),t._v(".")])])}),o,!1,null,null,null);e.default=r.exports}}]);