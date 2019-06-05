ipybootstrapvue
===============================

[![Version](https://img.shields.io/pypi/v/ipybootstrapvue.svg)](https://pypi.python.org/gfournier/ipybootstrapvue)

Jupyter widgets based on [Bootstrap Vue UI components](https://bootstrap-vue.js.org) which implement 
[Bootstrap Design](https://getbootstrap.com) with the [Vue.js framework](https://vuejs.org/).

The Vue component wrapping is based on the work of Mario Buikhuizen and Maarten Breddels on [ipyvuetify project](https://github.com/mariobuikhuizen/ipyvuetify) project.

The vision is to extract core components to build automatically Jupyter widgets based on Vue component libraries.

Installation
------------

To install use pip:

    $ pip install ipybootstrapvue
    $ jupyter nbextension enable --py --sys-prefix ipybootstrapvue


For a development installation (requires npm),

    $ git clone https://github.com/gfournier/ipybootstrapvue.git
    $ cd ipybootstrapvue
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix ipybootstrapvue
    $ jupyter nbextension enable --py --sys-prefix ipybootstrapvue

Usage
-----

For examples see the [example notebook](examples/Examples.ipynb).
