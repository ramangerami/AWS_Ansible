# Provisioning an AWS EC2 instance to run a web application using Ansible

* Make sure python3 is installed: `sudo apt update -y && sudo apt install python3 python3-venv`
* Create a folder for this project and use it for the rest of the commands below
* Create a Python virtual environment: `python3 -m venv venv`
* This will create a Python environment in the folder venv, using the Python module venv (-m).
* Activate the virtual environment: `source venv/bin/activate`
* Make sure to always activate the virtual environment before working with Ansible!
* Install Ansible: `pip install ansible`. This can take a long time.
* The Ansible modules that we use to interact with AWS in Ansible require a Python module called boto on the Ansible host.
* Install it by running: `pip install boto3 & pip install boto`
* source `aws_access_keys`(AWS access keys are not included in this repository)
