# MeterIQ-Explainable Smart Meter Analytics Platform

Course Project for UCS503P: Software Engineering
Thapar Institute of Engineering and Technology,Patiala

# Group Members & Roles
1. Yashit Arora: 1024160006
2. Aarushi Gahlawat: 1024160008
Project: MeterIQ
Course: UCS503P(Software Engineering)

# Project Overview
MeterIQ is an explainable smart-meter analytics platform designed for Indian Electricity distribution networks
the platform integrates two complementary modules:
1. *Anomaly/theft-risk Detection*
2. *Short-Term Load Forecasting*

The system uses real Indian Smart-meter data from Mathura and Bareilly to identify suspicious consumption behavior and forecast electricity demand. The goal is to convert large volumes of smart-meter data into actionable, explainable insights for electricity distribution utilities.

Rather than treating anomaly detection and load forecasting as two different tasks, MeterIQ integrates these two into a single decision support platform.

# System Architecture 
MeterIQ follows an integrates analytics pipeline
Smart meter data -> Clean and Reassemble -> Feature Engineering ->Anomaly detection + Load Forecasting-> Decision Support 

There are 3 reports in LaTeX format, namely *a*)
Project Proposal, *b*) Project Report Prototype Stage,
and *c*) Project Report Final -- each in their
respective folders.

Journals are stacked under the folder `journals`, one
folder for each team member.  A sample entry has been
made for example.

The source code is contained within the folder `code`.

The documentation is under folder `docs`.

All other aspects of code organisation are left to the
discretion of the user(s).


## Docs

As of now, the `docs` is just an organised collection
of markdown (`md`) files.  But the build procedure is
using [`mkdocs`](https://google.com/search?q=mkdocs)
backend.  As a result, any commit into the `master`
branch of github repository would result in CI/CD based
build and deployment of the documentation including the
journals.

For a local DEV-version of the docs for viewing and
testing, install the local env and issue the following
command:

``` shell
make docs
```

### Local `env` for `docs`

``` shell

```
