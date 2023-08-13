from typing import List


class Contact:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email


class ContactList():
    def __init__(self):
        self.contacts: List[Contact] = []
        self.favorites: List[Contact] = []

    def add_contact(self, contact: Contact):
        self.contacts.append(contact)

    def search_contact(self, name: str, from_favorites: bool = False):
        contact_list = self.favorites if from_favorites else self.contacts
        for contact in contact_list:
            if contact.name == name:
                return contact
        else:
            raise LookupError("Contact not found")

    def remove_contact(self, name: str):
        contact = self.search_contact(name)
        self.contacts.remove(contact)

    def add_to_favorites(self, name: str):
        contact = self.search_contact(name)
        self.favorites.append(contact)
        self.contacts.remove(contact)

    def remove_from_favorites(self, name: str):
        contact = self.search_contact(name, from_favorites=True)
        self.favorites.remove(contact)
        self.contacts.append(contact)
