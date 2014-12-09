#!/usr/bin/perl

use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);
use DBI;

print header, start_html("Accept Form");

my $name=param('name');
my $address=param('address');
print h3("inserting name:$name and address:$address into Database");
insertDB($name,$address);
print h3("Showing the contents of the Database");
showDB();

print end_html;

exit;

sub insertDB {
my $name = shift;
my $address =shift;
: