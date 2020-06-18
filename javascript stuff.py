#simply takes a custom version of the videogamesales csv with just the NA or JPN sales in the 2nd column with the video
#game name in the first column, and generates text in the format that is useable in javascript as hardcoded array
#   Nov.16,2019 - CPSC 583
#   Seth Campbell
import csv

#for NA
# with open("video game sales JPN per 100 thousand.csv") as file:
#     csv_reader = csv.reader(file, delimiter=",")
#     for row in csv_reader:
#         print('{"Name":"'+row[0]+'","Sales":'+row[1]+',"Region":"JPN"},')

#for JPN
with open("video game sales NA per 100 thousand.csv") as file:
    csv_reader = csv.reader(file, delimiter=",")
    for row in csv_reader:
        print('{"Name":"'+row[0]+'","Sales":'+row[1]+',"Region":"NA"},')
