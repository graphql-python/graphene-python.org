# -*- coding: utf-8 -*-
"""`sphinx_graphene_theme` lives on `Github`_.
.. _github: https://github.com/graphql-python/graphene-python.org
"""
from setuptools import setup
from sphinx_graphene_theme import __version__


setup(
    name='sphinx_graphene_theme',
    version=__version__,
    license='MIT',
    author='Syrus Akbary',
    author_email='me@syrusakbary.com',
    description='Graphene-Python.org theme for Sphinx.',
    zip_safe=False,
    packages=['sphinx_graphene_theme'],
    package_data={'sphinx_graphene_theme': [
        'theme.conf',
        '*.html',
    ]},
    include_package_data=True,
    classifiers=[
        'Development Status :: 3 - Alpha',
        'License :: OSI Approved :: BSD License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
