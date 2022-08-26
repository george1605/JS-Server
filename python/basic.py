import os
import sys

def cwd():
  return os.path.getcwd()

def mkdir(name):
  os.mkdir(name)

args = sys.argv
