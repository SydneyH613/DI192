import datetime


def minutes_lived(birthdate):
    birth = datetime.datetime.strptime(birthdate, '%Y-%m-%d')
    now = datetime.datetime.now()
    time_lived = now - birth
    minutes = time_lived.total_seconds() / 60
    print(f'You have lived {int(minutes)} minutes')


minutes_lived('1998-05-14')
