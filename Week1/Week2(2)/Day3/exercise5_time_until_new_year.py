import datetime


def time_until_new_year():
    now = datetime.datetime.now()
    new_year = datetime.datetime(year=now.year + 1, month=1, day=1)
    time_left = new_year - now
    print(f'There are {time_left} left until January 1st')


time_until_new_year()
