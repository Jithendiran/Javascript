const { Sequelize } = require("sequelize");
const { sequelize } = require("./dataBase");
const { author } = require("./author");
const { book } = require("./book");
const { Json } = require("sequelize/dist/lib/utils");
const { ne } = require("sequelize/dist/lib/operators");

const users = require("./users");
const gitUser = require("./gituser");

author.hasMany(book, {
  onDelete: "CASCADE",
});

/**
 * immediate invoke function to synchronous with database
 * if move to production it don't need
 */
(async () => {
  try {
    await sequelize.sync();
    // await sequelize.sync({force:true})
  } catch (error) {
    console.log(error);
  }
})();

/**
 * To create a author
 *
 * @param {string} name  name of the author
 * @param {string} email email of the author
 * @param {string} password to secure user account
 */
const addAuthor = async ({ name, email, password } = {}) => {
  try {
    const data = await author.create({
      userName: name,
      email: email,
      password: password,
    });
    return { success: true, msg: "Created user", yourId: data.userId };
  } catch (error) {
    return { success: false, msg: "Error in create of author : " + error };
  }
};

/**
 * To create a book
 *
 * @param {string} name  name of the book
 * @param {number} authorUserId foreignkey from author table userId
 */
const addBook = async ({ name, authorUserId } = {}) => {
  try {
    const authorData = await author.findByPk(authorUserId);

    if (authorData) {
      const bookData = await book.findAll({
        where: {
          authorUserId: authorUserId,
        },
      });
      if (bookData.length > 0) {
        bookData.forEach((i) => {
          if (i.getDataValue("bookName") == name) {
            throw new Error(
              "Book with same name for same author alredy exist's"
            );
          }
        });

        await book.create({ bookName: name, authorUserId: authorUserId });
      } else {
        await book.create({ bookName: name, authorUserId: authorUserId });
      }
      return { success: true, msg: "Added book to author id " + authorUserId };
    } else {
      return { success: false, msg: "Not a valid foreign key" };
    }
  } catch (error) {
    return { success: false, msg: "Error in create of book : " + error };
  }
};

const addGitUser = async ({ id, name } = {}) => {
  try {
    if (id && name) {
      //check the id alredy there are not
      if (!(await gitUser.findByPk(id))) {
        await gitUser.create({ id: id, name: name });
      } else {
        throw new Error("User alredy there");
      }
    } else {
      throw new Error("give data");
    }
  } catch (error) {
    return { success: false, msg: "Error in Adding git user : " + error };
  }
};

/**
 * View author
 * @param {number} id primary key of the author if given only that author is return else all the author are return
 */
const viewAuthor = async (id = 0) => {
  try {
    if (id == 0) {
      const a = await author.findAll();
      if (a) {
        return JSON.stringify(a, null, 2);
      } else {
        return { success: false, msg: "Author table is empty" };
      }
    } else {
      const a = await author.findByPk(id);
      if (a) {
        return JSON.stringify(a, null, 2);
      } else {
        return { success: false, msg: "No value in author with the given id" };
      }
    }
  } catch (error) {
    return { success: false, msg: "Error in view " + error };
  }
};

/**
 * To view book
 * @param {number} id foreignkey of the book if given only the book written by the author is return
 */
const viewBook = async (id = 0) => {
  try {
    if (id == 0) {
      const a = await book.findAll();
      if (a) {
        return JSON.stringify(a, null, 2);
      } else {
        return { success: false, msg: "Book table is empty" };
      }
    } else {
      const a = await book.findAll({
        where: {
          authorUserId: id,
        },
      });
      if (a.length > 0) {
        return JSON.stringify(a, null, 2);
      } else {
        return { success: false, msg: "No value in Book with the given id" };
      }
    }
  } catch (error) {
    return { success: false, msg: "Error in view Book " + error };
  }
};

/**
 * To update the author details
 * @param {number} id primaryKey of the author
 * @param {object} detail {userName,email,password} to be update
 */
const updateAuthor = async (id, detail) => {
  try {
    const authorData = author.findByPk(id);
    if (authorData) {
      await author.update(detail, {
        where: {
          userId: id,
        },
      });
      return { success: true, msg: "Author updated" };
    } else {
      return { success: false, msg: "No author found.." };
    }
  } catch (error) {
    return { success: false, msg: "Error in update Author " + error };
  }
};
/**
 * To update book details
 * @param {number} authorId foreignkey of book table
 * @param {number} bookId primaryKey ok the book table
 * @param {string} name book name to be update
 *
 * the name of the book is update for the author's book
 */
const updateBook = async ({ authorId, bookId, name } = {}) => {
  try {
    let bookData = await book.findByPk(bookId);

    if (bookData) {
      bookData = await book.findAll({
        where: {
          authorUserId: authorId,
        },
      });

      if (bookData.length > 0) {
        bookData.forEach((i) => {
          if (i.getDataValue("bookName") == name) {
            throw new Error(
              "Book with same name for same author alredy exist's"
            );
          }
        });
        await book.update(
          { bookName: name },
          {
            where: {
              bookId: bookId,
            },
          }
        );
        return { success: true, msg: "Book updated" };
      } else {
        return { success: false, msg: "No book found for that author" };
      }
    } else {
      return { success: false, msg: "Book Not found" };
    }
  } catch (error) {
    return { success: false, msg: "Error in create of book : " + error };
  }
};

/**
 * To delete author
 * @param {number} id primaryKey of author table
 */
const deleteAuthor = async (id) => {
  try {
    if (await author.findByPk(id)) {
      await author.destroy({
        where: {
          userId: id,
        },
      });
      return { success: true, msg: "Author Deleted" };
    } else {
      return { success: false, msg: "No Author found" };
    }
  } catch (error) {
    return { success: false, msg: "Error in delete Author " + error };
  }
};
/**
 * To delete book
 * @param {number} id primarykey of book table
 */
const deleteBook = async (id) => {
  try {
    if (await book.findByPk(id)) {
      await book.destroy({
        where: {
          bookId: id,
        },
      });
      return { success: true, msg: "Deleted" };
    } else {
      return { success: false, msg: "No Book found in that Bookid" };
    }
  } catch (error) {
    return { success: false, msg: "Error IN Delete : " + error };
  }
};

module.exports = {
  addAuthor,
  addBook,
  viewAuthor,
  viewBook,
  updateAuthor,
  updateBook,
  deleteAuthor,
  deleteBook,
};
