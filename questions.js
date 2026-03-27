// ============================================================
//  COSC 182 – Java Midterm Question Bank
//  Chapters 17-19 + Assign3
//  50 Multiple Choice  |  20 Coding
// ============================================================

const multipleChoice = [
  // ── Chapter 17: File I/O ──────────────────────────────────
  {
    id: "mc01",
    topic: "Chapter 17 – File I/O",
    question: "Which class is used to write Java primitive data types to a binary file?",
    options: ["FileWriter", "DataOutputStream", "ObjectOutputStream", "PrintWriter"],
    answer: 1,
    explanation: "DataOutputStream wraps a FileOutputStream and provides methods like writeInt(), writeDouble(), and writeUTF() for writing binary primitives."
  },
  {
    id: "mc02",
    topic: "Chapter 17 – File I/O",
    question: "What interface must a class implement to be written using ObjectOutputStream?",
    options: ["Cloneable", "Comparable", "Serializable", "Iterable"],
    answer: 2,
    explanation: "Serializable is a marker interface (no methods required) that flags a class as safe to serialize with ObjectOutputStream."
  },
  {
    id: "mc03",
    topic: "Chapter 17 – File I/O",
    question: "What exception is thrown when you attempt to read past the end of an ObjectInputStream?",
    options: ["FileNotFoundException", "IOException", "EOFException", "StreamCorruptedException"],
    answer: 2,
    explanation: "EOFException is thrown when the stream has no more data, which is the typical signal to stop reading in a loop."
  },
  {
    id: "mc04",
    topic: "Chapter 17 – File I/O",
    question: "Which RandomAccessFile mode opens a file for reading only?",
    options: ['"r"', '"w"', '"rw"', '"rws"'],
    answer: 0,
    explanation: '"r" opens the file for reading only. "rw" allows read and write. "rws" also syncs metadata to disk.'
  },
  {
    id: "mc05",
    topic: "Chapter 17 – File I/O",
    question: "What method in RandomAccessFile moves the file pointer to a specific byte offset?",
    options: ["setPosition()", "moveTo()", "seek()", "goto()"],
    answer: 2,
    explanation: "seek(long pos) moves the file-pointer offset (in bytes) from the beginning of the file."
  },
  {
    id: "mc06",
    topic: "Chapter 17 – File I/O",
    question: "When using DataOutputStream and DataInputStream, in what order must data be read back?",
    options: ["Alphabetical order", "Reverse order", "The same order as written", "Any order"],
    answer: 2,
    explanation: "Binary data has no self-describing structure. You must read values back in exactly the same order and with the same types as they were written."
  },
  {
    id: "mc07",
    topic: "Chapter 17 – File I/O",
    question: "To read a string written by DataOutputStream.writeUTF(), which method should you use?",
    options: ["readString()", "readUTF()", "readChars()", "readLine()"],
    answer: 1,
    explanation: "readUTF() reads a string encoded in modified UTF-8 format with a 2-byte length prefix, matching writeUTF()."
  },
  {
    id: "mc08",
    topic: "Chapter 17 – File I/O",
    question: "What does RandomAccessFile.getFilePointer() return?",
    options: ["The file name", "The total file size", "The current byte position", "The number of records"],
    answer: 2,
    explanation: "getFilePointer() returns the current byte offset of the file pointer from the start of the file."
  },
  {
    id: "mc09",
    topic: "Chapter 17 – File I/O",
    question: "If a Car record is stored at a fixed size of REC_SIZE bytes, what is the byte offset for record number n (zero-based)?",
    options: ["n + REC_SIZE", "n * REC_SIZE", "REC_SIZE / n", "REC_SIZE - n"],
    answer: 1,
    explanation: "With fixed-size records, record n starts at byte offset n × REC_SIZE. This is the standard random-access formula."
  },
  {
    id: "mc10",
    topic: "Chapter 17 – File I/O",
    question: "Which multi-catch syntax is correct in Java?",
    options: [
      "catch (IOException, ClassNotFoundException e)",
      "catch (IOException | ClassNotFoundException e)",
      "catch (IOException & ClassNotFoundException e)",
      "catch (IOException + ClassNotFoundException e)"
    ],
    answer: 1,
    explanation: "Java 7+ allows multiple exception types in a single catch block using the pipe (|) operator."
  },
  {
    id: "mc11",
    topic: "Chapter 17 – File I/O",
    question: "What is a key advantage of try-with-resources over a traditional try-finally block?",
    options: [
      "It runs faster",
      "It automatically closes resources when the block exits",
      "It catches more exception types",
      "It supports generics"
    ],
    answer: 1,
    explanation: "Resources declared in the try() clause implement AutoCloseable and are guaranteed to be closed when the block exits, even if an exception occurs."
  },
  {
    id: "mc12",
    topic: "Chapter 17 – File I/O",
    question: "What does the Serializable interface require a class to implement?",
    options: [
      "readObject() and writeObject()",
      "serialize() and deserialize()",
      "No methods — it is a marker interface",
      "clone()"
    ],
    answer: 2,
    explanation: "Serializable is a marker interface with no methods. Its presence tells the JVM that the class may be serialized."
  },
  {
    id: "mc13",
    topic: "Chapter 17 – File I/O",
    question: "Which method in RandomAccessFile returns the total length of the file in bytes?",
    options: ["getFilePointer()", "size()", "length()", "capacity()"],
    answer: 2,
    explanation: "length() returns the total size of the file in bytes, useful for computing how many records exist."
  },
  {
    id: "mc14",
    topic: "Chapter 17 – File I/O",
    question: "When reading serialized objects from a file, what is the typical pattern to detect the end of the stream?",
    options: ["Check for null return", "Catch EOFException", "Call hasNext()", "Check file length"],
    answer: 1,
    explanation: "Catching EOFException inside a while(true) loop is the standard idiom for reading an unknown number of serialized objects."
  },
  {
    id: "mc15",
    topic: "Chapter 17 – File I/O",
    question: "What does the Utils.writeStringToRAF() method pad strings with to fill a fixed-size frame?",
    options: ["Spaces (' ')", "Zero bytes ('0')", "Null terminators ('\\0')", "Hash marks ('#')"],
    answer: 2,
    explanation: "Fixed-size string frames in a RAF are padded with null terminators ('\\0') so each field occupies exactly the same number of bytes."
  },

  // ── Chapter 19 / Generics ─────────────────────────────────
  {
    id: "mc16",
    topic: "Chapter 19 – Generics",
    question: "What is the correct declaration for a generic class with a single type parameter T?",
    options: ["class MyClass[T]", "class MyClass<T>", "class MyClass(T)", "class MyClass{T}"],
    answer: 1,
    explanation: "Angle brackets <T> declare the type parameter. The class can then use T as a placeholder for any reference type."
  },
  {
    id: "mc17",
    topic: "Chapter 19 – Generics",
    question: "What constraint does <T extends Comparable<T>> place on type parameter T?",
    options: [
      "T must extend a class named Comparable",
      "T must implement the Comparable<T> interface",
      "T must be a Number subclass",
      "T must implement Serializable"
    ],
    answer: 1,
    explanation: "In generics, 'extends' means 'implements' for interfaces. T must implement Comparable<T>, providing a compareTo() method."
  },
  {
    id: "mc18",
    topic: "Chapter 19 – Generics",
    question: "What is the difference between Iterable<T> and Iterator<T>?",
    options: [
      "They are identical",
      "Iterable has iterator(); Iterator has hasNext() and next()",
      "Iterator has iterator(); Iterable has hasNext() and next()",
      "Iterable is for arrays; Iterator is for linked lists"
    ],
    answer: 1,
    explanation: "Iterable<T> is the collection side (has iterator()). Iterator<T> is the cursor side (has hasNext() and next())."
  },
  {
    id: "mc19",
    topic: "Chapter 19 – Generics",
    question: "What must a class implement to be usable in a Java enhanced for-loop (for-each)?",
    options: ["Iterator<T>", "Iterable<T>", "Comparable<T>", "Cloneable"],
    answer: 1,
    explanation: "The enhanced for-loop calls iterator() on the collection, which is provided by implementing Iterable<T>."
  },
  {
    id: "mc20",
    topic: "Chapter 19 – Generics",
    question: "What does the bounded wildcard <? extends Number> mean?",
    options: [
      "Only the exact Number class",
      "Number or any superclass of Number",
      "Number or any subclass of Number",
      "Any type that is not Number"
    ],
    answer: 2,
    explanation: "'? extends Number' means any type that is Number or a subtype of Number (Integer, Double, Long, etc.)."
  },
  {
    id: "mc21",
    topic: "Chapter 19 – Generics",
    question: "Which method is used to create a properly typed generic array at runtime?",
    options: ["new T[n]", "T.newArray(n)", "Array.newInstance(Class<?>, int)", "Arrays.create(T.class, n)"],
    answer: 2,
    explanation: "Array.newInstance(componentType, length) creates a new array with the given component type at runtime, bypassing type-erasure restrictions."
  },
  {
    id: "mc22",
    topic: "Chapter 19 – Generics",
    question: "What does type erasure mean in Java generics?",
    options: [
      "Generic types cause compile-time errors",
      "Generic type information is removed at runtime",
      "Generics slow down execution significantly",
      "Type parameters are preserved in bytecode"
    ],
    answer: 1,
    explanation: "The compiler removes (erases) generic type information during compilation. At runtime, there is only the raw type, maintaining backward compatibility."
  },
  {
    id: "mc23",
    topic: "Chapter 19 – Generics",
    question: "Which interface provides the compareTo() method for natural ordering?",
    options: ["Comparator", "Comparable", "Orderable", "Sortable"],
    answer: 1,
    explanation: "Comparable<T> defines natural ordering via compareTo(T other). Comparator is a separate comparison strategy passed externally."
  },
  {
    id: "mc24",
    topic: "Chapter 19 – Generics",
    question: "In a generic method declaration, where does the type parameter list appear?",
    options: [
      "After the method name",
      "Before the return type",
      "After the return type",
      "Inside the parameter list in place of a variable"
    ],
    answer: 1,
    explanation: "Generic method syntax: public static <T> ReturnType methodName(T param). The <T> appears before the return type."
  },
  {
    id: "mc25",
    topic: "Chapter 19 – Generics",
    question: "What does list.forEach(System.out::println) do?",
    options: [
      "Prints the list object reference",
      "Calls println for each element in the list",
      "Sorts the list by string representation",
      "Filters null elements from the list"
    ],
    answer: 1,
    explanation: "forEach accepts a Consumer. System.out::println is a method reference used as the Consumer, called once per element."
  },
  {
    id: "mc26",
    topic: "Chapter 19 – Generics",
    question: "If a class declares <T extends Comparable<T>>, which additional built-in method becomes available on T objects beyond equals() and toString()?",
    options: ["clone()", "compareTo()", "hashCode()", "getClass()"],
    answer: 1,
    explanation: "Comparable<T> requires implementing compareTo(T other), which returns negative/zero/positive to express ordering."
  },
  {
    id: "mc27",
    topic: "Chapter 19 – Generics",
    question: "What is the correct Stack.pop() implementation backed by an ArrayList?",
    options: [
      "storage.remove(0)",
      "storage.remove(storage.size() - 1)",
      "storage.get(0)",
      "storage.clear()"
    ],
    answer: 1,
    explanation: "Removing from the end of an ArrayList is O(1). The last element is at index size()-1 and represents the top of the stack."
  },
  {
    id: "mc28",
    topic: "Chapter 19 – Generics",
    question: "Which of the following is NOT a valid use of Java generics?",
    options: ["Generic class", "Generic method", "Generic primitive type (e.g., <int>)", "Generic interface"],
    answer: 2,
    explanation: "Java generics only work with reference types, not primitives. Use wrapper classes (Integer, Double, etc.) instead."
  },
  {
    id: "mc29",
    topic: "Chapter 19 – Generics",
    question: "To implement a custom iterator, which interface must the iterator class implement?",
    options: ["Iterable<T>", "Iterator<T>", "Sortable<T>", "Traversable<T>"],
    answer: 1,
    explanation: "Iterator<T> requires implementing hasNext() and next(). The collection class implements Iterable<T> and returns an instance of the iterator."
  },
  {
    id: "mc30",
    topic: "Chapter 19 – Generics",
    question: "What does the BTIterator use to perform an in-order traversal without recursion?",
    options: ["A Queue", "A java.util.Stack<BNode<T>>", "An ArrayList", "Recursion via a helper method"],
    answer: 1,
    explanation: "BTIterator pushes nodes onto a java.util.Stack using pushLeft (pushes all left-spine nodes), then pops one at a time and processes the right subtree."
  },

  // ── Assign3: Data Structures ──────────────────────────────
  {
    id: "mc31",
    topic: "Assign3 – Data Structures",
    question: "What traversal order of a Binary Search Tree produces elements in ascending sorted order?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    answer: 2,
    explanation: "In-order traversal visits Left → Root → Right. For a BST this always yields elements in ascending sorted order."
  },
  {
    id: "mc32",
    topic: "Assign3 – Data Structures",
    question: "In a BST, pre-order traversal visits nodes in which order?",
    options: ["Left, Root, Right", "Left, Right, Root", "Root, Left, Right", "Right, Left, Root"],
    answer: 2,
    explanation: "Pre-order: Root first, then Left subtree, then Right subtree (Root, Left, Right)."
  },
  {
    id: "mc33",
    topic: "Assign3 – Data Structures",
    question: "What is the height of a single leaf node (no children) in a BST?",
    options: ["-1", "0", "1", "2"],
    answer: 1,
    explanation: "A leaf node has no children. Its height is 0. An empty subtree (null) has height -1."
  },
  {
    id: "mc34",
    topic: "Assign3 – Data Structures",
    question: "What is the AVL balance condition for a binary tree to be considered balanced?",
    options: [
      "All leaves are at the same depth",
      "The height difference between left and right subtrees is ≤ 1 at every node",
      "The left subtree size equals the right subtree size",
      "The tree must be a complete binary tree"
    ],
    answer: 1,
    explanation: "AVL balance: |height(left) - height(right)| ≤ 1 at every node. This guarantees O(log n) operations."
  },
  {
    id: "mc35",
    topic: "Assign3 – Data Structures",
    question: "What does the deQueueMiddle() method return in OLList?",
    options: ["First element", "Last element", "The lower-middle element (removed)", "Maximum element"],
    answer: 2,
    explanation: "deQueueMiddle() finds the lower-middle index (size/2 - 1 for even, size/2 for odd), removes that node, and returns its data."
  },
  {
    id: "mc36",
    topic: "Assign3 – Data Structures",
    question: "What does symDifference(T[] aFirst, T[] aSecond) return?",
    options: [
      "Elements present in both arrays",
      "Elements present in exactly one of the two arrays",
      "All elements from both arrays combined",
      "Elements only in aFirst"
    ],
    answer: 1,
    explanation: "Symmetric difference = (A \\ B) ∪ (B \\ A): elements that are in A or B but not both."
  },
  {
    id: "mc37",
    topic: "Assign3 – Data Structures",
    question: "What does the Union method in GenericFunc actually return, based on its implementation?",
    options: [
      "All unique elements from both arrays (true union)",
      "Elements present in both arrays (intersection)",
      "Elements only in the first array",
      "An empty array"
    ],
    answer: 1,
    explanation: "Despite being named Union, the GenericFunc implementation returns the intersection — elements present in both arrays with duplicates removed."
  },
  {
    id: "mc38",
    topic: "Assign3 – Data Structures",
    question: "What pivot element does the quickSort method in GenericFunc use?",
    options: ["First element", "Middle element", "Last element", "A randomly chosen element"],
    answer: 2,
    explanation: "The GenericFunc.quickSort uses the last element (aVals[high]) as the pivot for partitioning."
  },
  {
    id: "mc39",
    topic: "Assign3 – Data Structures",
    question: "What does binSearch return if the search target is not found in the array?",
    options: ["0", "null", "-1", "Throws NoSuchElementException"],
    answer: 2,
    explanation: "Following the convention of Java's Arrays.binarySearch, binSearch returns -1 when the element is not found."
  },
  {
    id: "mc40",
    topic: "Assign3 – Data Structures",
    question: "What is the correct base case for a recursive linked list size method (recSize)?",
    options: [
      "When current.next == null, return 1",
      "When current == null, return 0",
      "When size == 1",
      "When current.data == null"
    ],
    answer: 1,
    explanation: "When current is null, there are no more nodes. Returning 0 allows 1 + recSize(next) to correctly accumulate the count."
  },
  {
    id: "mc41",
    topic: "Assign3 – Data Structures",
    question: "How does OLList maintain its elements in sorted order on insertion?",
    options: [
      "Sorts the entire list after each insertion",
      "Uses compareTo() to find the correct insertion position",
      "Requires a separate sort pass each time",
      "Requires elements to be pre-sorted before insertion"
    ],
    answer: 1,
    explanation: "OLList traverses from the head using compareTo() to find where the new node should be linked, keeping the list sorted at all times."
  },
  {
    id: "mc42",
    topic: "Assign3 – Data Structures",
    question: "What does subList(int nStart) in OLList return?",
    options: [
      "Elements before index nStart",
      "A new OLList from index nStart to the end of the list",
      "The element at index nStart",
      "The list with elements shifted by nStart"
    ],
    answer: 1,
    explanation: "subList(nStart) returns a clone of the tail of the list starting from the node at index nStart."
  },
  {
    id: "mc43",
    topic: "Assign3 – Data Structures",
    question: "What sentinel value does isBalanced() use to short-circuit the recursion when an imbalance is detected?",
    options: ["0", "null", "-1", "Integer.MAX_VALUE"],
    answer: 2,
    explanation: "The helper returns -1 to signal that a subtree is unbalanced. Any node that receives -1 from a child immediately returns -1, stopping further recursion."
  },
  {
    id: "mc44",
    topic: "Assign3 – Data Structures",
    question: "What does the join(LList<T> other) method in LList return?",
    options: [
      "Modifies this list by appending other in place",
      "A new list that is the concatenation of both lists",
      "A sorted merged list",
      "The intersection of both lists"
    ],
    answer: 1,
    explanation: "join() creates a new LList and adds all elements from both lists, leaving the originals unchanged."
  },
  {
    id: "mc45",
    topic: "Assign3 – Data Structures",
    question: "What technique does LList.clone() use to create a deep copy of each element?",
    options: [
      "Copy constructor",
      "Direct reference assignment",
      "Reflection to invoke the element's clone() method",
      "Object serialization"
    ],
    answer: 2,
    explanation: "LList.clone() uses getClass().getMethod(\"clone\").invoke(element) via reflection to call clone() on each element, supporting deep copies of generic types."
  },
  {
    id: "mc46",
    topic: "Assign3 – Data Structures",
    question: "What does contains(T[] aVals) in LList return?",
    options: [
      "The index of each found element",
      "A boolean array indicating whether each value is in the list",
      "A filtered sublist",
      "The count of matching elements"
    ],
    answer: 1,
    explanation: "contains(T[] aVals) returns a boolean[] of the same length where each position is true if the corresponding value exists in the list."
  },
  {
    id: "mc47",
    topic: "Assign3 – Data Structures",
    question: "What does balanceInsert() achieve in BinaryTree?",
    options: [
      "Inserts elements in random order for variety",
      "Builds a balanced BST from a pre-sorted array using divide-and-conquer",
      "Rebalances an existing unbalanced tree",
      "Deletes unbalanced nodes to force balance"
    ],
    answer: 1,
    explanation: "balanceInsert() takes a sorted array and inserts the middle element first, then recursively inserts the midpoints of each half, producing a balanced BST."
  },
  {
    id: "mc48",
    topic: "Assign3 – Data Structures",
    question: "What return type does multFactor(ArrayList<? extends Number> listVals, int nMult) have?",
    options: ["ArrayList<Double>", "int[]", "double[]", "Number[]"],
    answer: 2,
    explanation: "multFactor returns a double[] containing each Number multiplied by nMult. The bounded wildcard allows Integer, Double, etc. to be passed in."
  },
  {
    id: "mc49",
    topic: "Assign3 – Data Structures",
    question: "Which JUnit 5 assertion method checks that two arrays are equal element by element?",
    options: ["assertEquals()", "assertArrayEquals()", "assertDeepEquals()", "assertSameArray()"],
    answer: 1,
    explanation: "assertArrayEquals() compares two arrays element by element. assertEquals() on arrays checks reference equality, not contents."
  },
  {
    id: "mc50",
    topic: "Assign3 – Data Structures",
    question: "What is the key difference between an unordered linked list (LList) and an ordered linked list (OLList)?",
    options: [
      "LList uses arrays internally; OLList uses nodes",
      "LList allows duplicates; OLList does not",
      "OLList maintains elements in sorted order at all times using compareTo()",
      "OLList uses a doubly-linked structure; LList is singly-linked"
    ],
    answer: 2,
    explanation: "OLList's insert always places new nodes in sorted position using compareTo(), whereas LList.add() simply prepends to the front regardless of value."
  }
];

// ============================================================
//  CODING QUESTIONS
// ============================================================

const codingQuestions = [
  {
    id: "cd01",
    topic: "Chapter 19 – Generics",
    question: "Write a generic static method called <code>findMax</code> that accepts an array of type <code>T</code> (where <code>T extends Comparable&lt;T&gt;</code>) and returns the maximum element.",
    hint: "Iterate the array using compareTo() to track the running maximum.",
    answer: `public static &lt;T extends Comparable&lt;T&gt;&gt; T findMax(T[] aVals) {
    T max = aVals[0];
    for (T val : aVals) {
        if (val.compareTo(max) &gt; 0) {
            max = val;
        }
    }
    return max;
}`
  },
  {
    id: "cd02",
    topic: "Assign3 – Data Structures",
    question: "Write a generic iterative binary search method <code>binSearch</code> that searches a sorted array for a target value and returns its index, or <code>-1</code> if not found.",
    hint: "Maintain low/high bounds; compute mid; compare with target using compareTo().",
    answer: `public static &lt;T extends Comparable&lt;T&gt;&gt; int binSearch(T[] aVals, T obSearch) {
    int nLow = 0, nHigh = aVals.length - 1;
    while (nLow &lt;= nHigh) {
        int nMid = (nLow + nHigh) / 2;
        int cmp = aVals[nMid].compareTo(obSearch);
        if (cmp == 0) return nMid;
        else if (cmp &lt; 0) nLow = nMid + 1;
        else nHigh = nMid - 1;
    }
    return -1;
}`
  },
  {
    id: "cd03",
    topic: "Chapter 17 – File I/O",
    question: "Write the code to serialize a single <code>Person</code> object (stored in variable <code>person</code>) to a file called <code>\"people.dat\"</code> using try-with-resources.",
    hint: "Use ObjectOutputStream wrapping a FileOutputStream inside a try-with-resources block.",
    answer: `try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("people.dat"))) {
    oos.writeObject(person);
} catch (IOException e) {
    e.printStackTrace();
}`
  },
  {
    id: "cd04",
    topic: "Chapter 17 – File I/O",
    question: "Write code to read all serialized <code>Person</code> objects from <code>\"people.dat\"</code>, handling <code>EOFException</code> to detect the end of the stream.",
    hint: "Use a while(true) loop inside ObjectInputStream, catching EOFException to break, and multi-catch for the outer block.",
    answer: `try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("people.dat"))) {
    while (true) {
        try {
            Person p = (Person) ois.readObject();
            System.out.println(p);
        } catch (EOFException e) {
            break;
        }
    }
} catch (IOException | ClassNotFoundException e) {
    e.printStackTrace();
}`
  },
  {
    id: "cd05",
    topic: "Chapter 17 – File I/O",
    question: "Write code using <code>RandomAccessFile</code> to seek to and read the integer stored at record index <code>n</code> (zero-based), where each record is exactly <code>Integer.BYTES</code> bytes.",
    hint: "Use seek(n * Integer.BYTES) then readInt().",
    answer: `RandomAccessFile raf = new RandomAccessFile("data.dat", "r");
raf.seek((long) n * Integer.BYTES);
int value = raf.readInt();
raf.close();`
  },
  {
    id: "cd06",
    topic: "Chapter 19 – Generics",
    question: "Write a generic static <code>swap</code> method that swaps the elements at positions <code>i</code> and <code>j</code> in a generic array.",
    hint: "Use a temp variable. The type parameter <T> needs no bound here.",
    answer: `public static &lt;T&gt; void swap(T[] aVals, int i, int j) {
    T temp = aVals[i];
    aVals[i] = aVals[j];
    aVals[j] = temp;
}`
  },
  {
    id: "cd07",
    topic: "Chapter 19 – Generics",
    question: "Write a generic <strong>selection sort</strong> method for an array of type <code>T</code> where <code>T extends Comparable&lt;T&gt;</code>.",
    hint: "For each position i, find the minimum in [i+1 .. n-1] then swap it into position i.",
    answer: `public static &lt;T extends Comparable&lt;T&gt;&gt; void selSort(T[] aVals) {
    for (int i = 0; i &lt; aVals.length - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j &lt; aVals.length; j++) {
            if (aVals[j].compareTo(aVals[minIdx]) &lt; 0) {
                minIdx = j;
            }
        }
        swap(aVals, i, minIdx);
    }
}`
  },
  {
    id: "cd08",
    topic: "Assign3 – Data Structures",
    question: "Write the private recursive <strong>in-order traversal</strong> method for a <code>BinaryTree&lt;T&gt;</code>, printing each node's data to the console.",
    hint: "In-order: recurse left, process root, recurse right.",
    answer: `private void inOrder(BNode&lt;T&gt; current) {
    if (current != null) {
        inOrder(current.getLeft());
        System.out.println(current.getData());
        inOrder(current.getRight());
    }
}`
  },
  {
    id: "cd09",
    topic: "Assign3 – Data Structures",
    question: "Write a private recursive method <code>recSize</code> for a linked list that returns the number of nodes starting from <code>current</code>.",
    hint: "Base case: current == null returns 0. Recursive case: return 1 + recSize(next).",
    answer: `private int recSize(Node&lt;T&gt; current) {
    if (current == null) return 0;
    return 1 + recSize(current.getNext());
}`
  },
  {
    id: "cd10",
    topic: "Assign3 – Data Structures",
    question: "Write the <code>isBalanced()</code> public method and its private recursive helper for a BST. The helper should return <code>-1</code> if a subtree is unbalanced, or the height otherwise.",
    hint: "The helper checks left and right heights; if either returns -1 or difference > 1, propagate -1.",
    answer: `private int checkBalance(BNode&lt;T&gt; node) {
    if (node == null) return 0;
    int leftH = checkBalance(node.getLeft());
    if (leftH == -1) return -1;
    int rightH = checkBalance(node.getRight());
    if (rightH == -1) return -1;
    if (Math.abs(leftH - rightH) &gt; 1) return -1;
    return Math.max(leftH, rightH) + 1;
}

public boolean isBalanced() {
    return checkBalance(obRoot) != -1;
}`
  },
  {
    id: "cd11",
    topic: "Chapter 19 – Generics",
    question: "Write a generic <code>Stack&lt;T&gt;</code> class with <code>push()</code>, <code>pop()</code>, and <code>isEmpty()</code> methods, using an <code>ArrayList&lt;T&gt;</code> as the backing store.",
    hint: "push adds to end; pop removes from end (size-1); isEmpty checks the list.",
    answer: `public class Stack&lt;T&gt; {
    private ArrayList&lt;T&gt; storage = new ArrayList&lt;&gt;();

    public void push(T item) {
        storage.add(item);
    }

    public T pop() {
        return storage.remove(storage.size() - 1);
    }

    public boolean isEmpty() {
        return storage.isEmpty();
    }
}`
  },
  {
    id: "cd12",
    topic: "Chapter 17 – File I/O",
    question: "Write a class <code>Person</code> that implements both <code>Serializable</code> and <code>Comparable&lt;Person&gt;</code>, with a <code>String name</code> field and comparison by name.",
    hint: "Serializable is a marker interface; Comparable requires compareTo().",
    answer: `import java.io.Serializable;

public class Person implements Serializable, Comparable&lt;Person&gt; {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Person other) {
        return this.name.compareTo(other.name);
    }

    @Override
    public String toString() {
        return name;
    }
}`
  },
  {
    id: "cd13",
    topic: "Chapter 17 – File I/O",
    question: "Write code using <code>DataOutputStream</code> (try-with-resources) to write the int <code>42</code>, the double <code>3.14</code>, and the String <code>\"Hello\"</code> to a binary file <code>\"data.bin\"</code>.",
    hint: "Wrap FileOutputStream in DataOutputStream. Use writeInt, writeDouble, writeUTF.",
    answer: `try (DataOutputStream dos = new DataOutputStream(
        new FileOutputStream("data.bin"))) {
    dos.writeInt(42);
    dos.writeDouble(3.14);
    dos.writeUTF("Hello");
} catch (IOException e) {
    e.printStackTrace();
}`
  },
  {
    id: "cd14",
    topic: "Chapter 19 – Generics",
    question: "Write the <code>hasNext()</code> and <code>next()</code> methods for a singly-linked list iterator (<code>LLIterator&lt;T&gt;</code>), given a field <code>Node&lt;T&gt; current</code>.",
    hint: "hasNext checks if current is non-null; next captures current's data then advances the pointer.",
    answer: `public boolean hasNext() {
    return current != null;
}

public T next() {
    T data = current.getData();
    current = current.getNext();
    return data;
}`
  },
  {
    id: "cd15",
    topic: "Assign3 – Data Structures",
    question: "Write a generic <code>symDifference</code> method that returns elements present in exactly one of two arrays (no duplicates in the result).",
    hint: "Add elements from A that are not in B, then elements from B that are not in A.",
    answer: `public static &lt;T extends Comparable&lt;T&gt;&gt; ArrayList&lt;T&gt; symDifference(T[] aFirst, T[] aSecond) {
    ArrayList&lt;T&gt; result = new ArrayList&lt;&gt;();
    for (T val : aFirst) {
        if (!Arrays.asList(aSecond).contains(val))
            result.add(val);
    }
    for (T val : aSecond) {
        if (!Arrays.asList(aFirst).contains(val))
            result.add(val);
    }
    return result;
}`
  },
  {
    id: "cd16",
    topic: "Chapter 19 – Generics",
    question: "Write a generic class <code>Pair&lt;T extends Comparable&lt;T&gt;&gt;</code> with two fields of type <code>T</code> and a method <code>getMin()</code> that returns the smaller one.",
    hint: "Use the bounded type parameter and compareTo() inside getMin().",
    answer: `public class Pair&lt;T extends Comparable&lt;T&gt;&gt; {
    private T first;
    private T second;

    public Pair(T first, T second) {
        this.first = first;
        this.second = second;
    }

    public T getMin() {
        return first.compareTo(second) &lt;= 0 ? first : second;
    }
}`
  },
  {
    id: "cd17",
    topic: "Chapter 17 – File I/O",
    question: "Write code using try-with-resources and <code>Scanner</code> to read and print every line from a text file called <code>\"input.txt\"</code>.",
    hint: "Wrap new File(...) in Scanner. Use hasNextLine()/nextLine() loop.",
    answer: `try (Scanner scanner = new Scanner(new File("input.txt"))) {
    while (scanner.hasNextLine()) {
        System.out.println(scanner.nextLine());
    }
} catch (FileNotFoundException e) {
    e.printStackTrace();
}`
  },
  {
    id: "cd18",
    topic: "Assign3 – Data Structures",
    question: "Write the <code>insert</code> method for an ordered linked list (<code>OLList&lt;T extends Comparable&lt;T&gt;&gt;</code>) that inserts a new value in sorted order.",
    hint: "Handle empty list and head insertion separately; traverse to find insertion point using compareTo().",
    answer: `public void insert(T obData) {
    Node&lt;T&gt; newNode = new Node&lt;&gt;(obData);
    if (head == null || head.getData().compareTo(obData) &gt;= 0) {
        newNode.setNext(head);
        head = newNode;
    } else {
        Node&lt;T&gt; current = head;
        while (current.getNext() != null &amp;&amp;
               current.getNext().getData().compareTo(obData) &lt; 0) {
            current = current.getNext();
        }
        newNode.setNext(current.getNext());
        current.setNext(newNode);
    }
}`
  },
  {
    id: "cd19",
    topic: "Assign3 – Data Structures",
    question: "Write a recursive <strong>quickSort</strong> with a helper that sorts a generic array using the last element as the pivot (use a generic <code>swap</code> method).",
    hint: "Public method calls the helper with lo=0, hi=length-1. Partition around the last element.",
    answer: `public static &lt;T extends Comparable&lt;T&gt;&gt; void quickSort(T[] aVals) {
    quickSort(aVals, 0, aVals.length - 1);
}

private static &lt;T extends Comparable&lt;T&gt;&gt; void quickSort(T[] aVals, int low, int high) {
    if (low &lt; high) {
        T pivot = aVals[high];
        int i = low - 1;
        for (int j = low; j &lt; high; j++) {
            if (aVals[j].compareTo(pivot) &lt;= 0) {
                i++;
                swap(aVals, i, j);
            }
        }
        swap(aVals, i + 1, high);
        int pi = i + 1;
        quickSort(aVals, low, pi - 1);
        quickSort(aVals, pi + 1, high);
    }
}`
  },
  {
    id: "cd20",
    topic: "Assign3 – Data Structures",
    question: "Write the public <code>insert(T obData)</code> method and its private recursive helper <code>recInsert</code> for a generic Binary Search Tree.",
    hint: "If current is null, return a new BNode. Otherwise compare and recurse left or right.",
    answer: `public void insert(T obData) {
    obRoot = recInsert(obRoot, obData);
}

private BNode&lt;T&gt; recInsert(BNode&lt;T&gt; current, T obData) {
    if (current == null) {
        return new BNode&lt;&gt;(obData);
    }
    if (obData.compareTo(current.getData()) &lt; 0) {
        current.setLeft(recInsert(current.getLeft(), obData));
    } else if (obData.compareTo(current.getData()) &gt; 0) {
        current.setRight(recInsert(current.getRight(), obData));
    }
    return current;
}`
  }
];
